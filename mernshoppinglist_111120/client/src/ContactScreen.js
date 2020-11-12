import React from 'react';
import TopThird from "./topThird/TopThird"
import BottomThird from "./bottomThird/BottomThird";
import PopupContact from "./popups/PopupContact";
import './AppSub.css';

function ContactScreen() {
  return (
    <div className="AppSub">
      <div className="Overlay"></div>
      <TopThird />
      <PopupContact />
      <BottomThird />


    </div>
  );
}

export default ContactScreen;
