import React from 'react';
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store"
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path="/contact" component={ContactScreen} />
        <Route exact path="/menu" component={PopupMenu} />
        <Route exact path="/" component={AppSub} />
      </Switch>
    </Provider>
  );
}

export default App;
