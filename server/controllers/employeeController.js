const asyncHandler = require('express-async-handler')

const Employee = require('../models/employeeModel')

// @desc    Get employees
// @route   GET /api/employees
// @access  Public
const getEmployees = asyncHandler(async (req, res) => {
    try {
        //  Query the database for a list of all results
        const result = await Employee.find().populate();

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully found all employees',
            });
        } else {
            return res.status(203).json({
                success: true,
                result: [],
                message: 'Collection is Empty',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: [],
            message: error.message,
            error: error,
        });
    }
})

// @desc    Add employee
// @route   POST /api/employees
// @access  Public
const addEmployee= asyncHandler(async (req, res) => {
    try {
        // Creating a new employee in the collection
        const result = await Employee.create(req.body)
        // Returning successfull response
        return res.status(200).json({
            success: true,
            result,
            message: 'Successfully Created',
        });
    } catch (error) {
        // If error is thrown by Mongoose due to required validations
        if (error.name == 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } else {
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }
})

// @desc    Update employee
// @route   PUT /api/employees/:id
// @access  Public
const updateEmployee = asyncHandler(async (req, res) => {
    try {
        // Find employee by id and updates with the required fields
        const result = await Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true, // return the new result instead of the old one
            runValidators: true,
        }).exec();
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No employee found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result,
                message: 'we update this employee by this id: ' + req.params.id,
            });
        }
    } catch (error) {
        // If error is thrown by Mongoose due to required validations
        if (error.name == 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } else {
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }
})

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Public
const deleteEmployee = asyncHandler(async (req, res) => {
    try {
        // Find the employee by id
        const result = await Employee.findById(req.params.id)

        // If no results found, return employee not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No employee found by this id: ' + req.params.id,
            });
        } else {
            await Employee.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully Deleted the employee by id: ' + req.params.id,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }

})

module.exports = {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
}
