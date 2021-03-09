import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import CookiesComponent from "../CookiesComponent"

class Terms extends Component {


    scrollUp = () => {
        window.scrollTo(500, 0);
    }

    render() {



        return (
            <div className="Terms">
                <div className="Terms-cookies" onClick={this.scrollUp}><Link to="/cookies"> Cookies </Link></div>
                <div className="Terms-conditions" onClick={this.scrollUp}><Link to="/terms">Conditions</Link></div>
                <div className="Terms-privacy" onClick={this.scrollUp}><Link to="/privacy">Privacy</Link></div>
                <div className="Terms-info" > <a href="https://www.tierneywebdevelopment">2020 Katie's Place | Site by Tierney Web Development</a></div>
            </div>
        )
    }
}

export default Terms;