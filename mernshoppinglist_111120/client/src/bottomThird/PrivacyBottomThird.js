import React, { Component } from 'react'
import Signup from "./Signup"
import Socials from "./Socials"
import Terms from "./Terms"

class PrivacyBottomThird extends Component{

    render(){


        return(
            <div className="PrivacyBottomThird">
                <Signup />
                <Socials />
                <Terms />
            </div>
        )
    }
}

export default PrivacyBottomThird;