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



                        <div className="menuModalButtonDiv">
                            <Button color="dark" className="BookingModalButton" onClick={this.toggle}>Close</Button>
                        </div>


                        <Form className="bookingComponentForm">
                            <FormGroup row>
                                <Label for="exampleEmail" sm={1}>Email</Label>
                                <Col sm={9}>
                                    <Input type="email" name="email" placeholder="Enter email" />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={1}>Name</Label>
                                <Col sm={9}>
                                    <Input type="text" name="username" id="username" placeholder="Enter name" />
                                </Col>
                            </FormGroup>



                            <FormGroup row>
                                <Label for="exampleText" sm={1}>Comments</Label>
                                <Col sm={9}>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </Col>
                            </FormGroup>



                            <FormGroup row>
                                <Label for="exampleCustomSelect" id="slotLabel">Your slot</Label>
                                <CustomInput type="select" id="exampleCustomSelect" name="customSelect" className="bookingComponentFormSlotSelect">
                                    <option value="">-none-</option>
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>

                                </CustomInput>
                            </FormGroup>



                            <FormGroup row>
                                <Label for="checkbox2" sm={2}>Confirm</Label>
                                <Col sm={{ size: 15 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" required />{' '}

                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
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
