import React, { Component } from 'react'
import BookOnlineButton from "../components/BookOnlineButton"



class Booking extends Component{





    render(){

        return(
            <div className="Booking">
                <div className="Booking-internal">
                    <div className="Booking-internal-first-paragraph">Book with us</div>
                    <div className="Booking-internal-second-paragraph">Enjoy a complimentary tea or coffee when booking online</div>
                    <div className="Booking-internal-button">
                       <BookOnlineButton />
                    </div>
                </div>                
            </div>
            
        )
    }



}




export default Booking;