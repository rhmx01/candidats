const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The attribute name is missing'],
        },
        description: {
            type: String,
        },
        client: {
            type: mongoose.Schema.ObjectId,
            ref: 'Client',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
projectSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Project', projectSchema)