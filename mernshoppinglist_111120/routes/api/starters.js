const express = require("express")
const router = express.Router()
const Starter = require("../../models/Starter")


//get all starters
router.get('/', (req, res) => {

    Starter.find()
        .sort({ name: 1 })
        .then(starters => res.json(starters))

});



//post a starter
router.post('/', (req, res) => {

    Starter.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    }).then(zoonsh => res.json(zoonsh))

});



//delete a starter


router.delete('/:id', async (req, res) => {
    try {
        await Starter.findByIdAndRemove(req.params.id)
        res.json({ success: true })
    } catch (error) {
        res.status(404).json({ success: false })
    }
});


module.exports = router;