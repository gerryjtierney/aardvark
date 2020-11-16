import React, { Component } from "react";
import { connect } from "react-redux";
import { getMains } from "../actions/mainActions"
import PropTypes from "prop-types"



class MainMenuModal extends Component {




    componentDidMount() {
        this.props.getMains();
    }




    render() {

        const { mains } = this.props.main

        return (

            <div className="mainContainer">
                {mains.map(({ name, price, description }) => (
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

MainMenuModal.propTypes = {
    getMains: PropTypes.func.isRequired,
    main: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    main: state.main
})


export default connect(mapStateToProps, { getMains })(MainMenuModal);