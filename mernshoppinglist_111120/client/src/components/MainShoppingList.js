import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getMains, deleteMain } from "../actions/mainActions"
import PropTypes from "prop-types"



class MainShoppingList extends Component {

    componentDidMount() {
        this.props.getMains();
    }

    onDeleteClick = (id) => {
        this.props.deleteMain(id)
    }


    render() {

        const { mains } = this.props.main

        return (
            <Container>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {mains.map(({ _id, name, price, description }) => (

                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <div className="shopping-item">
                                        <div className="shopping-itemButton">
                                            <Button
                                                className="remove-btn"
                                                color="danger"
                                                size="small"
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                            >&times;</Button>
                                        </div>
                                        <div className="shopping-itemName">{name}</div>
                                        <div className="shopping-itemDesc">{description}</div>
                                        <div className="shopping-itemPrice">{price}</div>
                                    </div>
                                </ListGroupItem>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }
}

MainShoppingList.propTypes = {
    getMains: PropTypes.func.isRequired,
    main: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    main: state.main
})


export default connect(mapStateToProps, { getMains, deleteMain })(MainShoppingList);