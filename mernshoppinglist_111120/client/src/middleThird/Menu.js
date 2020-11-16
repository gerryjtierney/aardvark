import React, { Component } from 'react'
import PrimaryMenuModal from "../components/PrimaryMenuModal"


class Menu extends Component{
    constructor(props){
        super(props);
        this.scrollUp = this.scrollUp.bind(this);
    }


    scrollUp(){
        window.scrollTo(500, 0);
    }




    render(){
        return(
            <div className="Menu">
                
                
                <div className="Menu-overlay"></div>
                <div className="Menu-text" onClick={this.scrollUp}>What's cooking?</div>
                
            </div>
        )
        }


}

export default Menu;