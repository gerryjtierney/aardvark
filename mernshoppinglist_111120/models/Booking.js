const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookingSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false
    },
    slot: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    }

});

module.exports = Item = mongoose.model('booking', BookingSchema);