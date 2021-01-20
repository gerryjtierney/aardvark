import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../src/CookiesPage.css"
import CookiesTopThird from "../topThird/CookiesTopThird"
import CookiesMiddleThird from "../middleThird/CookiesMiddleThird"
import CookiesBottomThird from "../bottomThird/CookiesBottomThird"




class CookiesPage extends Component {

    componentDidMount() {
        document.getElementById('root').scrollTop = 1;
    }





    render() {




        return (



            <div className="CookiesComponentContent">
                <CookiesTopThird/>
                <CookiesMiddleThird />
                <CookiesBottomThird />        
            </div>
        )
    }
}


export default CookiesPage;