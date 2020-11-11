const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require("../../models/User")


//*ROUTE    post api/users
//*DESC     register new user
//*ACCESS   public
//*TODO     change access to private
router.post('/', (req, res) => {
    const {name, email, password} = req.body;

    //basic validation
    if(!name || !email || !password){
        return res.status(400).json({msg: "required information missing"})
    }


    //check for existing user
    User.findOne({email: email}).then(
        user =>{
            if(user){return res.status(400).json({msg: "user already exists"})};

            const newUser = new User({
                name,
                email,
                password
            });


            //create salt to hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                }
                
                )
            })

        }
    )


});






module.exports = router;