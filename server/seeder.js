const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
// const express = require('express');
// const app = express();
const Client = require('./models/clientModel')
const Employee = require('./models/employeeModel')
const Role = require('./models/roleModel')
const Quality = require('./models/qualityModel')
const Project = require('./models/projectModel')
const {employees, projects, roles, qualities, clients} = require('./data')

connectDb();

async function seedDatabase() {
    try {
        await seedModel(Role, roles);
        console.log("Done Roles")
        await seedModel(Client, clients);
        console.log("Done Clients")
        await seedModel(Employee, employees);
        console.log("Done Employees")
        await seedModel(Project, projects);
        console.log("Done Projects")
        await seedModel(Quality, qualities);
        console.log("Done Quallities")

        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Disconnect from MongoDB
        console.log("Done")
       process.exit();
    }
}

async function seedModel(model, data) {
    // Remove existing data for the model
    await model.deleteMany({});

    // Insert seed data for the model
    await model.insertMany(data);
}

// Call the seeding function
seedDatabase();