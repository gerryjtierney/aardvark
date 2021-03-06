const express = require("express")
const router = express.Router()
const Booking = require("../../models/Booking")



//get all breakfast bookings
router.get('/', (req, res) => {

    Booking.find()
    .sort({name: 1})
    .then(booking => res.json(booking))

});


//post a breakfast booking
router.post('/', (req, res) => {

    Booking.create({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments,
        slot: req.body.slot,
        id: req.body.id,
    }).then(zoonsh => res.json(zoonsh))

});




module.exports = router;