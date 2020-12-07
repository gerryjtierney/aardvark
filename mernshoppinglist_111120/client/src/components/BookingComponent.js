import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Input, CustomInput } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';


class BookingComponent extends Component {

    state = {
        Breakfast: 3,
        Lunch: 3,
        Dinner: 3,
        toggled: false,

        comments: "",
        email: "",
        name: "",
        slot: "",
        BreakfastArray: [],
        LunchArray: [],
        DinnerArray: []

    }



    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, [e.target.email]: e.target.value, 
                        [e.target.comments]: e.target.value, [e.target.slot]: e.target.value})
    }





    checkSlots = (e) => {

        let checkSlotsVariable = e;
        console.log(checkSlotsVariable);
        
        switch(checkSlotsVariable){
            case "Breakfast":
                if(this.state.BreakfastArray.length < 2){
                    this.setState({Breakfast: this.state.Breakfast -1}, () => {
                    console.log(this.state.Breakfast)
                    });
                } else {
                    alert("Sorry, no slots available for this time period");
                }
            break;

            case "Lunch":
                if(this.state.Lunch > 0){
                    this.setState({Lunch: this.state.Lunch -1}, () => {
                    console.log(this.state.Lunch)
                    });
                } else {
                    alert("Sorry, no slots available for this time period")
                }
            break;

            case "Dinner":
                if(this.state.Dinner > 0){
                    this.setState({Dinner: this.state.Dinner -1}, () => {
                    console.log(this.state.Dinner)
                    });
                } else {
                    alert("Sorry, no slots available for this time period")
                }
            break;

            default:
                console.log("Something went wrong");
        }

    }



    onSubmit = (e) => {
        e.preventDefault();

        let newBooking = {

            name: this.state.name,
            email: this.state.email,
            comments: this.state.comments,
            slot: this.state.slot,
            id: uuidv4()
        }

        this.checkSlots(newBooking.slot);


        var joined = this.state.BreakfastArray.concat(newBooking.id);
        this.setState({ BreakfastArray: joined })

        //this.state.BreakfastArray.push(newBooking.id);
        console.log(this.state.BreakfastArray);
 

        console.log(newBooking);
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
                                    <Input type="email" name="email" placeholder="Email" onChange={this.onChange}/>
                                </Col>
                            </FormGroup>


                            <FormGroup row className="entryFieldName">
                                <Col>
                                    <Input type="text" name="name" id="username" placeholder="Name" onChange={this.onChange}/>
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

export default BookingComponent;
