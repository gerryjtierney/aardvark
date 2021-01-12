import React, { Component } from 'react'
import Logo from "./topThird/Logo"
import Nav from "./topThird/Nav"
import CookiesComponent from "./components/CookiesComponent"


class CookiesPage extends Component{



    render(){
        return(
            <div className="CookiesContainer">
                <div className="TopThird">
                    <Logo />
                    <Nav />                    
                </div>
                <div className="MiddleThird">
                    <CookiesComponent />
                </div>
            </div>
        )
    }
}

export default CookiesPage;