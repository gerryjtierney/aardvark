import React, { Component } from 'react'
import CookiesComponent from "../components/CookiesComponent"

class Terms extends Component{

    render(){

        return(
            <div className="Terms">
                <div className="Terms-cookies"><CookiesComponent /></div>
                <div className="Terms-conditions">Conditions</div>
                <div className="Terms-privacy">Privacy</div>
                <div className="Terms-info" > <a href="https://www.github.com/gerryjtierney">2020 Katie's Place | Site by Tierney Web Development</a></div>
            </div>
        )
    }
}

export default Terms;