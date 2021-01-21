import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Input, CustomInput } from "reactstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types"
import { addBooking } from "../actions/bookingActions"
import { addLunchBooking } from "../actions/lunchBookingActions"
import { addDinnerBooking } from "../actions/dinnerBookingActions"

import { getBookings } from "../actions/bookingActions"
import { getLunchBookings } from "../actions/lunchBookingActions"
import { getDinnerBookings } from "../actions/dinnerBookingActions"



class BookingComponent extends Component {





    componentDidMount() {
        this.props.getBookings();
        this.props.getLunchBookings();
        this.props.getDinnerBookings();

    }






    state = {
        toggled: false,
        toggled2: false,
        toggled3: false,
        comments: "",
        email: "",
        name: "",
        slot: "",
        BreakfastArray: [],
        LunchArray: [],
        DinnerArray: [],

    }






    onChange = (e) => {

        this.props.getBookings();
        this.props.getLunchBookings();
        this.props.getDinnerBookings();

        this.setState({

            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.comments]: e.target.value,
            [e.target.slot]: e.target.value,
            BreakfastCounter: this.props.booking.length,
            LunchCounter: this.props.lunchBooking.length,
            DinnerCounter: this.props.dinnerBooking.length
        })
    }









    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ BreakfastCounter: this.props.booking.length })
        this.setState({ LunchCounter: this.props.lunchBooking.length })
        this.setState({ DinnerCounter: this.props.dinnerBooking.length })


        const newBooking = {
            name: this.state.name,
            email: this.state.email,
            comments: this.state.comments,
            slot: this.state.slot,
            id: uuidv4()
        }





        this.checkSlots(newBooking);


    }






    checkSlots = (newBooking) => {


        let checkSlotsVariable = newBooking.slot;




        switch (checkSlotsVariable) {
            case "Breakfast":
                if (this.state.BreakfastCounter < 3) {
                    var joinedBreakfast = this.state.BreakfastArray.concat(newBooking);
                    this.setState({ BreakfastArray: joinedBreakfast });
                    this.props.addBooking(newBooking);
                    this.toggle2()
                    this.toggle()
                    console.log("booked")

                    //put all this part in a separate function then call on it here
                } else {

                    this.toggle3();
                    console.log("not booked")
                }
                break;


            case "Lunch":
                if (this.state.LunchCounter < 3) {
                    var joinedLunch = this.state.LunchArray.concat(newBooking);
                    this.setState({ LunchArray: joinedLunch });
                    this.props.addLunchBooking(newBooking);
                    this.toggle2()
                    this.toggle()
                } else {
                    this.toggle3();
                }
                break;



            case "Dinner":
                if (this.state.DinnerCounter < 3) {
                    var joinedDinner = this.state.DinnerArray.concat(newBooking);
                    this.setState({ DinnerArray: joinedDinner });
                    this.props.addDinnerBooking(newBooking);
                    this.toggle2()
                    this.toggle()
                } else {
                    this.toggle3();
                }
                break;



            default:
                console.log("Something went wrong");
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
                                    <Input type="email" name="email" placeholder="Email" onChange={this.onChange} required/>
                                </Col>
                            </FormGroup>


                            <FormGroup row className="entryFieldName">
                                <Col>
                                    <Input type="text" name="name" id="username" placeholder="Name" onChange={this.onChange} required/>
                                </Col>
                            </FormGroup>



                            <FormGroup row className="entryFieldComments">

                                <Col>
                                    <Input type="textarea" name="comments" id="exampleText" placeholder="Comments/requirements" onChange={this.onChange} />
                                </Col>
                            </FormGroup>



                            <FormGroup row className="entryFieldSlots ">
                                <Col>
                                    <CustomInput type="select" onChange={this.onChange} name="slot" id="bookingFormSlotSelect" required>
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