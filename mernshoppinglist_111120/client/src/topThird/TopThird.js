import React, { Component } from 'react'
import Logo from "./Logo"
import Nav from "./Nav"
import Call from "./Call"


class TopThird extends Component{



    render(){
        return(
            <div className="TopThird">
                <Logo />
                <Nav />
                <Call />
            </div>
        )
    }
}

export default TopThird;