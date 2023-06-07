const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let birthdaySchema = new Schema({
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    birth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now  
    }
});

module.exports = mongoose.model('Birthday', birthdaySchema);