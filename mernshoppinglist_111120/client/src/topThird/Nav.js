import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PrimaryMenuModal from '../components/PrimaryMenuModal';



class Nav extends Component{




    render(){
        return(
            <div className="Nav">

                <div className="NavText">

                        <div className="menu">
                            <PrimaryMenuModal />
                        </div>

                    <div className="book">Book</div>

                    <div className="rewards">Rewards</div>

                        <div className="contact" id="manualOverride">
                        <Link to="/contact">Contact</Link>
                    </div>
                    
                </div>

            </div>
        )
        }


}

export default Nav;