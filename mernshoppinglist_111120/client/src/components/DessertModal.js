import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { addDessert } from "../actions/dessertActions"


class DessertModal extends Component {
    state = {
        modal: false,
        name: "",
        price: "",
        description: "",
        course: ""


    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, [e.target.price]: e.target.value, 
                        [e.target.description]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newDessert = {

            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }

        this.props.addDessert(newDessert);

        this.toggle();
    }


    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={this.toggle}
                >Add dessert
                 </Button>

                <Modal id="itemModal"
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To List</ModalHeader>
                    <ModalBody toggle={this.toggle}>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="dessert">Main</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="dessert"
                                    placeholder="add dessert"
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type="number"
                                    name="price"
                                    id="dessert"
                                    placeholder="Add price"
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type="text"
                                    name="description"
                                    id="dessert"
                                    placeholder="Add description"
                                    onChange={this.onChange}
                                ></Input>


                                <Button
                                    color="dark"
                                    style={{ marginTop: "2rem" }}
                                    block
                                >Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    dessert: state.dessert
})

export default connect(mapStateToProps, { addDessert })(DessertModal);