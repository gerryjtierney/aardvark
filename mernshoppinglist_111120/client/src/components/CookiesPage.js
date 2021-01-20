import React, { Component } from "react";
import "../../src/CookiesPage.css"
import CookiesTopThird from "../topThird/CookiesTopThird"
import CookiesMiddleThird from "../middleThird/CookiesMiddleThird"
import CookiesBottomThird from "../bottomThird/CookiesBottomThird"




class CookiesPage extends Component {




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