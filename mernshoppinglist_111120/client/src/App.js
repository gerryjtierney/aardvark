import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import AppSub from "./AppSub.js";
import PopupMenu from './popups/PopupMenu';
import ContactScreen from './ContactScreen.js';
import './AppSub.css';


function App() {
  return (
    <Provider store={store}>
      <div>
        <Switch>

          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/menu" component={PopupMenu} />
          <Route exact path="/" component={AppSub} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
