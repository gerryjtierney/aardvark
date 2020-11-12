import React, { Component } from 'react'
import Signup from "./Signup"
import Socials from "./Socials"
import Terms from "./Terms"

class BottomThird extends Component{

    render(){


        return(
            <div className="BottomThird">
                <Signup />
                <Socials />
                <Terms />
            </div>
        )
    }
}

export default BottomThird;