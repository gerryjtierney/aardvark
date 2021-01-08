import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PrimaryMenuModal from '../components/PrimaryMenuModal';
import BookingComponent from "../components/BookingComponent";
import RewardComponent from "../components/RewardComponent"


class Nav extends Component{




    render(){
        return(
            <div className="Nav">

                <div className="NavText">

                        <div className="menu">
                            <PrimaryMenuModal />
                        </div>

                    <div className="book">
                        <BookingComponent />
                    </div>

                    <div className="rewards">
                        <RewardComponent />
                    </div>

                        <div className="contact" id="manualOverride">
                        <Link to="/contact">Contact</Link>
                    </div>
                    
                </div>

            </div>
        )
        }


}

export default Nav;