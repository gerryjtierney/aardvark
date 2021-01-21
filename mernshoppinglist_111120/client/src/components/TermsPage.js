import React, { Component } from "react";
import "../../src/CookiesPage.css"
import CookiesTopThird from "../topThird/CookiesTopThird"
import TermsMiddleThird from "../middleThird/TermsMiddleThird"
import CookiesBottomThird from "../bottomThird/CookiesBottomThird"




class CookiesPage extends Component {

    componentDidMount() {
        document.getElementById('root').scrollTop = 1;
    }


    render() {




        return (



            <div className="CookiesComponentContent">
                <CookiesTopThird />
                <TermsMiddleThird />
                <CookiesBottomThird />
            </div>
        )
    }
}



export default CookiesPage;