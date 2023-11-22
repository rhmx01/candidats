const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The attribute name is missing'],
        },
        email: {
            type: String,
            required: [true, 'The attribute email is missing'],
            unique: [true, "Email address already taken"],
        },
        photo: {
            type: String,
            required: [true, 'The attribute photo is missing'],
        },
        role: {
            type: mongoose.Schema.ObjectId,
            ref: 'Role',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
employeeSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Employee', employeeSchema)