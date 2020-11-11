const mongoose = require('mongoose');
const MainsSchema = mongoose.Schema;

// Create Schema
const MainSchema = new MainsSchema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

});

module.exports = Item = mongoose.model('main', MainSchema);