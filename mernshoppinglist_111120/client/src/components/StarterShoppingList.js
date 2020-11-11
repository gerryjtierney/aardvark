import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getStarters, deleteStarter } from "../actions/starterActions"
import PropTypes from "prop-types"



class ShoppingList extends Component {

    componentDidMount() {
        this.props.getStarters();
    }

    onDeleteClick = (id) => {
        this.props.deleteStarter(id)
    }


    render() {

        const { starters } = this.props.starter

        return (
            <Container>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {starters.map(({ _id, name, price, description }) => (

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

ShoppingList.propTypes = {
    getStarters: PropTypes.func.isRequired,
    starter: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    starter: state.starter
})


export default connect(mapStateToProps, { getStarters, deleteStarter })(ShoppingList);