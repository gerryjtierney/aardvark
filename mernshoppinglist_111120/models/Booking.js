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
    },
    expire_at: {
        type: Date,
        default: (Date.now() + 3600000),
    }


});

module.exports = Item = mongoose.model('booking', BookingSchema);