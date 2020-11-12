import React from 'react';
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store"

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import PrimaryMenuModal from "./components/PrimaryMenuModal"


import AppSub from "./AppSub.js";
import PopupMenu from './popups/PopupMenu';
import ContactScreen from './ContactScreen.js';


import TopThird from "./topThird/TopThird"
import MiddleThird from "./middleThird/MiddleThird"
import BottomThird from "./bottomThird/BottomThird"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="Overlay">

          <TopThird />
          <MiddleThird />
          <BottomThird />
        </div>
      </div>
    </Provider>
  );
}

export default App;
