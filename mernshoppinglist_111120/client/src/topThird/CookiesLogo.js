import React, { Component } from 'react';
import {Link} from "react-router-dom";


class CookiesLogo extends Component{




    render(){
        return(
            <div className="CookiesLogo">
                <div className="CookiesLogoText">
                <Link to="/">Katie's</Link>
                </div>
            </div>

        )
        }


}

export default CookiesLogo;