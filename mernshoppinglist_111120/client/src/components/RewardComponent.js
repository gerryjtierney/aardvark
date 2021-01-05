import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Input, CustomInput } from "reactstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types"
import { addReward } from "../actions/rewardActions"




class RewardComponent extends Component {

    state = {
        toggled: false,
        toggled2: false,
        toggled3: false,
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
            consent: this.state.comments,
            id: uuidv4()
        }

        this.addReward(newReward);


    }






    addReward = (newReward) => {



                if (this.state.consent == true) {
                    var joinedReward = this.state.RewardArray.concat(newReward);
                    this.setState({ RewardArray: joinedReward });
                    this.props.addBooking(newReward);
                    this.toggle2()
                    this.toggle()

                    //put all this part in a separate function then call on it here
                } else {

                    this.toggle3();
                }


    }











    toggle = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    toggle2 = () => {
        this.setState({
            toggled2: !this.state.toggled2
        })
    }

    toggle3 = () => {
        this.setState({
            toggled3: !this.state.toggled3
        })
    }



    render() {




        return (



            <div>
                <div onClick={this.toggle} className="menuButton">Book</div>


                <Modal isOpen={this.state.toggled}>
                    <div id="BookingComponentFormContainer">



                        <Form className="bookingComponentForm" onSubmit={this.onSubmit}>

                            <FormGroup row>
                                <Col>
                                    <div className="menuModalButtonDiv">
                                        <Button color="dark" className="BookingModalButton" onClick={this.toggle}>Close</Button>
                                    </div>
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



                            <FormGroup row className="entryFieldComments">

                                <Col>
                                    <Input type="textarea" name="comments" id="exampleText" placeholder="Comments/requirements" onChange={this.onChange} />
                                </Col>
                            </FormGroup>



                            <FormGroup row className="entryFieldSlots ">
                                <Col>
                                    <CustomInput type="select" onChange={this.onChange} name="slot" id="bookingFormSlotSelect">
                                        <option value="">-choose slot-</option>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>

                                    </CustomInput>
                                </Col>
                            </FormGroup>






                            <FormGroup row className="BookingSubmitButton">

                                <Button className="BookingSubmitButtonButton">Submit</Button>

                            </FormGroup>
                        </Form>





                    </div>
                </Modal>






                <Modal className="BookingThankYou" isOpen={this.state.toggled2}>
                    <div className="BookingThankYouInternal">
                        <div className="BookingThankYouInternalTitle">Thank you!</div>
                        <div className="BookingThankYouInternalParagraph">Booking for {this.state.name} at {this.state.slot} booked successfully</div>
                        <button className="BookingThankYouCloseButton" onClick={this.toggle2}>close</button>
                    </div>
                </Modal>

                <Modal className="BookingNoSlots" id="bah" isOpen={this.state.toggled3}>
                    <div className="BookingNoSlotsInternal">
                        <div className="BookingNoSlotsInternalTitle">No slots available</div>
                        <div className="BookingNoSlotsParagraph">No slots available for {this.state.slot} - please try a different time</div>
                        <button className="BookingNoSlotsCloseButton" onClick={this.toggle3}>close</button>
                    </div>
                </Modal>




            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    booking: state.booking.bookings,
    lunchBooking: state.lunchBooking.lunchBookings,
    dinnerBooking: state.dinnerBooking.dinnerBookings
})


BookingComponent.propTypes = {
    getBookings: PropTypes.func.isRequired,
    getLunchBookings: PropTypes.func.isRequired,
    getDinnerBookings: PropTypes.func.isRequired,
    booking: PropTypes.array.isRequired
}


export default connect(mapStateToProps, { addBooking, addLunchBooking, addDinnerBooking, getBookings, getLunchBookings, getDinnerBookings })(BookingComponent);