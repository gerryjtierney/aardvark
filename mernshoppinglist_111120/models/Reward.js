const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RewardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    consent: {
        type: Boolean,
        required: true
    },
    id: {
        type: String,
        required: false
    }


});

module.exports = Item = mongoose.model('reward', RewardSchema);