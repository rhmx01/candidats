const mongoose = require('mongoose')

const roleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'The attribute name is missing'],
        },
        ref: {
            type: String,
            required: [true, 'The attribute ref is missing'],
            unique: [true, "Ref already taken"],
        },
    }
);
roleSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Role', roleSchema)