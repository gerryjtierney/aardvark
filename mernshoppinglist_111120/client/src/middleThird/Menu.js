import React, { Component } from 'react'
import { Button, Modal } from "reactstrap";
import PrimaryMenuModal from "../components/PrimaryMenuModal"
import StarterMenuModal from "../components/StarterMenuModal";
import MainMenuModal from "../components/MainMenuModal";
import DessertMenuModal from "../components/DessertMenuModal"


class Menu extends Component{
    constructor(props){
        super(props);
        this.scrollUp = this.scrollUp.bind(this);
    }


    scrollUp(){
        window.scrollTo(500, 0);
    }

    state = {
        toggled: false
    }

    toggle = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    } 




    render(){
        return(
            <div className="Menu">
                
                
                <div className="Menu-overlay"></div>
                <div className="Menu-text" onClick={this.scrollUp, this.toggle}>What's cooking?</div>


                <Modal isOpen={this.state.toggled} id="menuModal">
        <div className="PrimaryMenuModalContainer">



            <div className="menuModalButtonDiv">
                <Button color="dark" className="menuModalButton" onClick={this.toggle}>Close</Button>
            </div>


            <div className="starterSection"><StarterMenuModal /></div>
            <div className="mainSection"><MainMenuModal /></div>
            <div className="dessertSection"><DessertMenuModal /></div>
            
            
            



        </div>
    </Modal>
                
            </div>
        )



        }


}

export default Menu;