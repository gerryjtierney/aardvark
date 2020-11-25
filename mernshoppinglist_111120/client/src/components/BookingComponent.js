import React, { Component } from "react";
import { Button, Modal, Col, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";


class BookingComponent extends Component{

    state = {
        booking0900: false,
        booking1200: false,
        booking1700: false,
        toggled: false
    }

    toggle = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    } 




    render() {



        return (

            <div className="PrimaryMenuModal" id="BookingComponent">
                <div onClick={this.toggle} className="menuButton">Book</div>


                <Modal isOpen={this.state.toggled} id="menuModal">
                    <div className="PrimaryMenuModalContainer">



                        <div className="menuModalButtonDiv">
                            <Button color="dark" className="menuModalButton" onClick={this.toggle}>Close</Button>
                        </div>


    <Form className="bookingComponentForm">
      <FormGroup row>
        <Label for="exampleEmail" sm={1}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={1}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="username" id="username" placeholder="Enter name" />
        </Col>
      </FormGroup>



      <FormGroup row>
        <Label for="exampleText" sm={1}>Comments</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>



      <FormGroup>
        <Label for="exampleCustomSelect" >Choose your slot</Label>
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect" className="bookingComponentFormSlotSelect">
          <option value="">-none-</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>

        </CustomInput>
      </FormGroup>



      <FormGroup row>
        <Label for="checkbox2" sm={2}>I agree to the terms and conditions</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" required/>{' '}
              
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
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
