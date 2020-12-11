const express = require("express")
const router = express.Router()
const LunchBooking = require("../../models/LunchBooking")






//post a lunch booking
router.post('/', (req, res) => {

    LunchBooking.create({
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments,
        slot: req.body.slot,
        id: req.body.id,
    }).then(zoonsh => res.json(zoonsh))

});




module.exports = router;