const mongoose = require('mongoose')

const qualitySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The attribute name is missing'],
        },
        description: {
            type: String,
        },
        role: {
            type: mongoose.Schema.ObjectId,
            ref: 'Role',
            required: true,
        },
    }
);
qualitySchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Quality', qualitySchema)