import React, { Component } from "react";
import { connect } from "react-redux";
import { getStarters } from "../actions/starterActions"
import PropTypes from "prop-types"



class StarterMenuModal extends Component {

    componentDidMount() {
        this.props.getStarters();
    }




    render() {

        const { starters } = this.props.starter

        return (

            <div className="StarterContainer">
                {starters.map(({ name, price, description }) => (
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





StarterMenuModal.propTypes = {
    getStarters: PropTypes.func.isRequired,
    starter: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    starter: state.starter
})


export default connect(mapStateToProps, { getStarters })(StarterMenuModal);