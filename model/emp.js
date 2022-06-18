const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    mob: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("emp", empSchema)