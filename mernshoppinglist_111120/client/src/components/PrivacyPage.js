import React, { Component } from "react";
import "../../src/CookiesPage.css"
import CookiesTopThird from "../topThird/CookiesTopThird"
import PrivacyMiddleThird from "../middleThird/PrivacyMiddleThird"
import PrivacyBottomThird from "../bottomThird/PrivacyBottomThird"




class PrivacyPage extends Component {

    componentDidMount() {
        document.getElementById('root').scrollTop = 1;
    }


    render() {




        return (



            <div className="PrivacyComponentContent">
                <CookiesTopThird />
                <PrivacyMiddleThird />
                <PrivacyBottomThird />
            </div>
        )
    }
}



export default PrivacyPage;