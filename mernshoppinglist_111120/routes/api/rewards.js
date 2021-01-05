const express = require("express")
const router = express.Router()
const Reward = require("../../models/Reward")




//post a reward booking
router.post('/', (req, res) => {

    Reward.create({
        name: req.body.name,
        email: req.body.email,
        consent: req.body.consent,
        id: req.body.id,
    }).then(zoonsh => res.json(zoonsh))

});




module.exports = router;