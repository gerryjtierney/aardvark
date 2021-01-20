import React, { Component } from 'react'
import Signup from "./Signup"
import Socials from "./Socials"
import Terms from "./Terms"

class CookiesBottomThird extends Component{

    render(){


        return(
            <div className="CookiesBottomThird">
                <Signup />
                <Socials />
                <Terms />
            </div>
        )
    }
}

export default CookiesBottomThird;