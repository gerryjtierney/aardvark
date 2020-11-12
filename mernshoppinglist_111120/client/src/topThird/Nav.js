import React, { Component } from 'react'
import {Link, Route, Switch} from "react-router-dom";



class Nav extends Component{




    render(){
        return(

            <div className="Nav">

                <div className="NavText">

                        <div className="menu">
                            Menu
                        </div>

                    <div className="book">Book</div>

                    <div className="rewards">Rewards</div>

                        <div className="contact">
                        Contact
                    </div>
                    
                </div>

            </div>

        )
        }


}

export default Nav;