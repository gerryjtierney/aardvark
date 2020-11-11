import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { addMain } from "../actions/mainActions"


class MainModal extends Component {
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

        const newMain = {

            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }

        this.props.addMain(newMain);

        this.toggle();
    }


    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={this.toggle}
                >Add main course
                 </Button>

                <Modal id="itemModal"
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To List</ModalHeader>
                    <ModalBody toggle={this.toggle}>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="main">Main</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="main"
                                    placeholder="add main"
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type="number"
                                    name="price"
                                    id="main"
                                    placeholder="Add price"
                                    onChange={this.onChange}
                                ></Input>

                                <Input
                                    type="text"
                                    name="description"
                                    id="main"
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
    main: state.main
})

export default connect(mapStateToProps, { addMain })(MainModal);