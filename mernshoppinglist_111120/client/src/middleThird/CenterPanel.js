import React, { Component } from 'react'
import Menu from "./Menu"
import Rewards from "./Rewards"
import Booking from "./Booking"


class CenterPanel extends Component{




    render(){
        return(
            <div className="CenterPanel">
                
                <Booking />
                <Menu />
                <Rewards />
            </div>
        )
        }


}

export default CenterPanel;