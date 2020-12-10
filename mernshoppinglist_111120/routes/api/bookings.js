const express = require("express")
const router = express.Router()
const Booking = require("../../models/Booking")






//post a booking
router.post('/', (req, res) => {

    Booking.create({
        name: req.body.name,
        email: req.body.price,
        comments: req.body.description,
        slot: req.body.slot,
        id: req.body.id
    }).then(zoonsh => res.json(zoonsh))

});




module.exports = router;