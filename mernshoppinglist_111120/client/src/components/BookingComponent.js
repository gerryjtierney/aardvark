import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Input, CustomInput } from "reactstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types"
import { addBooking } from "../actions/bookingActions"
import { addLunchBooking } from "../actions/lunchBookingActions"
import { addDinnerBooking } from "../actions/dinnerBookingActions"

import { getBookings } from "../actions/bookingActions"



class BookingComponent extends Component {



    componentDidMount() {
        this.props.getBookings();
        
    }

    componentDidUpdate(){
        this.props.getBookings();
    }


        


    state = {
        
        LunchCounter: 3,
        DinnerCounter: 3,
        toggled: false,

        comments: "",
        email: "",
        name: "",
        slot: "",
        BreakfastArray: [],
        LunchArray: [],
        DinnerArray: [],
        
        }


        



    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, [e.target.email]: e.target.value,
            [e.target.comments]: e.target.value, [e.target.slot]: e.target.value,
            BreakfastCounter: this.props.booking.length
        })
    }





    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ BreakfastCounter: this.props.booking.length })

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
                    
                    //put all this part in a separate function then call on it here
                } else {
                    alert("Sorry, no slots available for this time period");
                }
                break;



            case "Lunch":
                if (this.state.LunchArray.length < 3) {
                    this.setLunchCounter();
                    var joinedLunch = this.state.LunchArray.concat(newBooking);
                    this.setState({ LunchArray: joinedLunch });
                } else {
                    alert("Sorry, no slots available for this time period")
                }
                break;



            case "Dinner":
                if (this.state.DinnerArray.length < 3) {
                    this.setDinnerCounter();
                    var joinedDinner = this.state.DinnerArray.concat(newBooking);
                    this.setState({ DinnerArray: joinedDinner });
                    console.log(this.state.DinnerCounter)
                } else {
                    alert("Sorry, no slots available for this time period")
                }
                break;



            default:
                console.log("Something went wrong");
        }

    }






    setLunchCounter = () => {
        this.setState({ LunchCounter: this.state.LunchCounter - 1 })
    }

    setDinnerCounter = () => {
        this.setState({ DinnerCounter: this.state.DinnerCounter - 1 })
    }






    toggle = () => {
        this.setState({
            toggled: !this.state.toggled
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

            </div>
        )
    }
}


const mapStateToProps = (state) =>({
    booking: state.booking.bookings
})


BookingComponent.propTypes = {
    getBookings: PropTypes.func.isRequired,
    booking: PropTypes.array.isRequired
}


export default connect(mapStateToProps, { addBooking, addLunchBooking, addDinnerBooking, getBookings })(BookingComponent);