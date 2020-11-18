import React, { Component } from 'react'
import Signup from "./Signup"
import Socials from "./Socials"
import Terms from "./Terms"

class BottomThirdContact extends Component{

    render(){


        return(
            <div className="BottomThirdContact">
                <Signup />
                <Socials />
                <Terms />
            </div>
        )
    }
}

export default BottomThirdContact;