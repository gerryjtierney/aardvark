import React, { Component } from 'react'
import Logo from "./Logo"
import Nav from "./Nav"
import Call from "./Call"


class TopThirdContact extends Component{



    render(){
        return(
            <div className="TopThirdContact">
                <Logo />
                <Nav />
                <Call />
            </div>
        )
    }
}

export default TopThirdContact;