const mongoose = require('mongoose');
const DessertsSchema = mongoose.Schema;

// Create Schema
const DessertSchema = new DessertsSchema({
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

module.exports = Item = mongoose.model('dessert', DessertSchema);