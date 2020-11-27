import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";


class BookingComponent extends Component {

    state = {
        booking0900: 3,
        booking1200: 3,
        booking1700: 3,
        toggled: false,
        userEmail: "",
        userName: "",
        userComments: "",
        userSlot: ""


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



                        <Form className="bookingComponentForm">

                        <FormGroup row>
                            <Col  sm={2}>
                            <div className="menuModalButtonDiv">
                            <Button color="dark" className="BookingModalButton" onClick={this.toggle}>Close</Button>
                        </div>
                        </Col>
                        </FormGroup>


                            <FormGroup row className="entryField">

                                <Col sm={10}>
                                    <Input type="email" name="email" placeholder="Email" />
                                </Col>
                            </FormGroup>

                            <FormGroup row  className="entryField">

                                <Col sm={10}>
                                    <Input type="text" name="username" id="username" placeholder="Name" />
                                </Col>
                            </FormGroup>



                            <FormGroup row  className="entryField">

                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="exampleText" placeholder="Comments/requirements" />
                                </Col>
                            </FormGroup>



                            <FormGroup row className="entryField ">
                            <Col sm={3}>
                                <CustomInput type="select">
                                    <option value="">-choose slot-</option>
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>

                                </CustomInput>
                            </Col>
                            </FormGroup>






                            <FormGroup row>
                            <Col sm={2}>
                                    <Button className="BookingSubmitButton">Submit</Button>
                            </Col>
                            </FormGroup>
                        </Form>





                    </div>
                </Modal>

            </div>
        )
    }
}

export default BookingComponent;
