import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Input, CustomInput } from "reactstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types"
import { addReward } from "../actions/rewardActions"




class RewardComponent extends Component {

    state = {
        rewardsToggled: false,
        rewardsToggled2: false,
        rewardsToggled3: false,
        consent: false,
        email: "",
        name: ""
    }






    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.consent]: e.target.value
        })
    }










    onSubmit = (e) => {
        e.preventDefault();

        const newReward = {

            name: this.state.name,
            email: this.state.email,
            consent: this.state.consent,
            id: uuidv4()
        }


        if (this.state.consent === true) {
            this.addReward(newReward);
        } else {

            this.toggle3();
        }


    }






    addReward = (newReward) => {
        this.props.addReward(newReward);
        this.toggle2()
        this.toggle()
    }














    toggle = () => {
        this.setState({
            rewardsToggled: !this.state.rewardsToggled,
            consent: false
        })
    }

    toggle2 = () => {
        this.setState({
            rewardsToggled2: !this.state.rewardsToggled2
        })
    }

    toggle3 = () => {
        this.setState({
            rewardsToggled3: !this.state.rewardsToggled3
        })
        console.log("toggle3 firing")
    }

    consentToggle = () => {
        this.setState({
            consent: !this.state.consent
        })
    }



    render() {




        return (



            <div>
                <div onClick={this.toggle} className="menuButton">Sign up</div>


                <Modal isOpen={this.state.rewardsToggled}>
                    <div id="BookingComponentFormContainer">



                        <Form className="rewardComponentForm" onSubmit={this.onSubmit}>

                            <FormGroup row>
                                <Col>
                                    <div className="menuModalButtonDiv">
                                        <Button color="dark" className="RewardModalButton" onClick={this.toggle}>Close</Button>
                                    </div>
                                </Col>
                            </FormGroup>

                            <FormGroup row className="entryFieldRewardText">
                                <Col>
                                    Sign up to hear about our latest rewards!
                                </Col>
                            </FormGroup>


                            <FormGroup row className="entryFieldEmail">
                                <Col>
                                    <Input type="email" name="email" placeholder="Email" onChange={this.onChange} />
                                </Col>
                            </FormGroup>


                            <FormGroup row className="entryFieldName">
                                <Col>
                                    <Input type="text" name="name" id="username" placeholder="Name" onChange={this.onChange} />
                                </Col>
                            </FormGroup>



                            <FormGroup  className="entryFieldConsent">

                                <Col>
                                    <CustomInput type="switch" id="exampleCustomSwitch" label="I consent to the terms and conditions" name="consent" placeholder="Consent" onChange={this.consentToggle} />
                                    
                                </Col>
                            </FormGroup>





                            

                            <FormGroup row className="RewardSubmitButton">

                                <Button className="RewardSubmitButtonButton">Submit</Button>

                            </FormGroup>
                        </Form>





                    </div>
                </Modal>






                <Modal className="BookingThankYou" isOpen={this.state.rewardsToggled2}>
                    <div className="RewardThankYouInternal">
                        <div className="RewardThankYouInternalTitle">Thank you, we'll stay in touch</div>
                        <button className="RewardThankYouCloseButton" onClick={this.toggle2}>close</button>
                    </div>
                </Modal>

                <Modal className="BookingNoSlots" id="bah" isOpen={this.state.rewardsToggled3}>
                    <div className="RewardNoSlotsInternal">
                        <div className="RewardNoSlotsInternalTitle" id="pleaseConsent">Please consent to our terms and conditions and try again.</div>
                        <button className="RewardNoSlotsCloseButton" onClick={this.toggle3}>close</button>
                    </div>
                </Modal>




            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    email: state.booking.bookings
})


RewardComponent.propTypes = { addReward: PropTypes.func.isRequired }



export default connect(mapStateToProps, { addReward })(RewardComponent);