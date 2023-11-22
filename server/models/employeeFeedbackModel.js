const mongoose = require('mongoose')

const employeeFeedbackSchema = mongoose.Schema(
    {
        client: {
            type: mongoose.Schema.ObjectId,
            ref: 'Client',
            required: true,
        },
        project: {
            type: mongoose.Schema.ObjectId,
            ref: 'Project',
            required: true,
        },
        employee: {
            type: mongoose.Schema.ObjectId,
            ref: 'Employee',
            required: true,
        },
        comment: {
            type: String,
            required: [true, 'The attribute email is missing'],
            unique: [true, "Email address already taken"],
        },
        rate: {
            type: Number,
            required: [true, 'The attribute rate is missing'],
        },
    },
    {
        timestamps: true,
    }
);
employeeFeedbackSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Employee', employeeFeedbackSchema)