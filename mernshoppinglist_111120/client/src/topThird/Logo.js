import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Logo extends Component{




    render(){
        return(
            <div className="Logo">
                <div className="LogoText">
                <Link to="/">Katie's</Link>
                </div>
            </div>

        )
        }


}

export default Logo;