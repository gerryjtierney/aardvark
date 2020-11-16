import React, { Component } from "react";

import { connect } from "react-redux";
import { getDesserts } from "../actions/dessertActions"
import PropTypes from "prop-types"



class DessertMenuModal extends Component {


    componentDidMount() {
        this.props.getDesserts();
    }




    render() {

        const { desserts } = this.props.dessert

        return (

            <div className="dessertContainer"> 
                {desserts.map(({ name, price, description }) => (
                    <div className="menu-list-item">
                        <div className="menu-itemName">{name}</div>
                        <div className="menu-itemDesc">{description}</div>
                        <div className="menu-itemPrice">{price}</div>
                    </div>
                ))}     
            </div>
        )
    }
}

DessertMenuModal.propTypes = {
    getDesserts: PropTypes.func.isRequired,
    dessert: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    dessert: state.dessert
})


export default connect(mapStateToProps, { getDesserts })(DessertMenuModal);