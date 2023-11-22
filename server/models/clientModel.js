const mongoose = require('mongoose')

const clientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The attribute name is missing'],
        },
        ref: {
            type: String,
            required: [true, 'The attribute name is missing'],
            unique: [true, "Ref already taken"],
        },
        email: {
            type: String,
            required: [true, 'The attribute email is missing'],
            unique: [true, "Email address already taken"],
        },
    },
    {
        timestamps: true,
    }
);
clientSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Client', clientSchema)