import React from 'react';
import TopThirdContact from "./topThird/TopThirdContact"
import BottomThirdContact from "./bottomThird/BottomThirdContact";
import BottomThird from "./bottomThird/BottomThird"
import PopupContact from "./popups/PopupContact";
import './AppSubContact.css';

function ContactScreen() {
  return (
    <div className="AppSubContact">
      <div className="OverlayContact"></div>
      <TopThirdContact />
      <PopupContact />
      <BottomThirdContact />


    </div>
  );
}

export default ContactScreen;
