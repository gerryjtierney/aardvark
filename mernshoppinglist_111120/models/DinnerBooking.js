const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DinnerBookingSchema = new Schema({
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
        required: false
    },
    slot: {
        type: String,
        required: true
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

module.exports = Item = mongoose.model('dinnerBooking', DinnerBookingSchema);