import React, { Component } from "react";
import { Button, Modal } from "reactstrap";

import StarterMenuModal from "./StarterMenuModal";
import MainMenuModal from "./MainMenuModal";
import DessertMenuModal from "./DessertMenuModal"



class PrimaryMenuModal extends Component {
    state = {
        toggled: false
    }

    toggle = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }






    render() {



        return (

            <div className="PrimaryMenuModal">
                <div onClick={this.toggle} className="menuButton"> Menu </div>


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



export default PrimaryMenuModal;