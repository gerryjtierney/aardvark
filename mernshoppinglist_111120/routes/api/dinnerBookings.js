const express = require("express")
const router = express.Router()
const DinnerBooking = require("../../models/DinnerBooking")



//get all dinner bookings
router.get('/', (req, res) => {

    DinnerBooking.find()
        .sort({ name: 1 })
        .then(dinnerBooking => res.json(dinnerBooking))

});



//post a dinner booking
router.post('/', (req, res) => {

    DinnerBooking.create({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments,
        slot: req.body.slot,
        id: req.body.id,
    }).then(zoonsh => res.json(zoonsh))

});




module.exports = router;