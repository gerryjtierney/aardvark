import React, { Component } from 'react'
import {Link} from "react-router-dom";



class Nav extends Component{




    render(){
        return(
            <div className="Nav">

                <div className="NavText">

                        <div className="menu">
                            <Link to="/menu">Menu</Link>
                        </div>

                    <div className="book">Book</div>

                    <div className="rewards">Rewards</div>

                        <div className="contact">
                        <Link to="/contact">Contact</Link>
                    </div>
                    
                </div>

            </div>
        )
        }


}

export default Nav;