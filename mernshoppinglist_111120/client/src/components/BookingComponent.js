import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";


class BookingComponent extends Component {

    state = {
        Breakfast: 3,
        Lunch: 3,
        Dinner: 3,
        toggled: false,

        comments: "",
        email: "",
        name: "",
        slot: ""

    }



    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, [e.target.email]: e.target.value, 
                        [e.target.comments]: e.target.value, [e.target.slot]: e.target.value})
    }





    checkSlots = () => {
        this.setState({Breakfast: this.state.Breakfast -1}, () => {
            console.log(this.state.Breakfast)
        });
    }



    onSubmit = (e) => {
        e.preventDefault();

        let newBooking = {

            name: this.state.name,
            email: this.state.email,
            comments: this.state.comments,
            slot: this.state.slot
        };

        this.checkSlots();
 

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
                                    <CustomInput type="select" onChange={this.onChange} name="slot">
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
