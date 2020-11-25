import React from 'react';
import TopThird from "./topThird/TopThird"
import MiddleThird from "./middleThird/MiddleThird";
import BottomThird from "./bottomThird/BottomThird";
import BookingComponent from "./components/BookingComponent";


function AppSub() {
  return (
    <div className="AppSub">
      <div className="Overlay"></div>
      <TopThird />
      <MiddleThird />
      <BottomThird />


    </div>
  );
}

export default AppSub;
