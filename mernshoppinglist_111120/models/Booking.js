const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    slot: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }

});

module.exports = Item = mongoose.model('booking', BookingSchema);