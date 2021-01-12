import React, { Component } from 'react'
import RewardComponent from "../components/RewardComponent"






class Rewards extends Component{




    render(){
        return(
            <div className="Rewards">
                <div className="Rewards-overlay"></div>
                <div className="Rewards-text"> <RewardComponent /> </div>
            </div>
        )
        }


}



export default Rewards;