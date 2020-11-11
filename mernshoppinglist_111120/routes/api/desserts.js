const express = require("express")
const router = express.Router()
const Dessert = require("../../models/Dessert")


//get all desserts
router.get('/', (req, res) => {

    Dessert.find()
    .sort({name: 1})
    .then(mains => res.json(mains))

});



//post a main
router.post('/', (req, res) => {

    Dessert.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    }).then(zoonsh => res.json(zoonsh))

});



//delete a main


router.delete('/:id', async (req, res) => {
    try {
        await Dessert.findByIdAndRemove(req.params.id)
        res.json({success: true})
      } catch (error) {
        res.status(404).json({success: false})
      }
});


module.exports = router;