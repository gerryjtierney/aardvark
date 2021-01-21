import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import AppSub from "./AppSub.js";
import ContactScreen from './ContactScreen.js';
import './AppSub.css';
import CookiesComponent from "./components/CookiesPage.js"
import TermsComponent from "./components/TermsPage.js"


function App() {
  return (
    <Provider store={store}>
      <div>
        <Switch>

          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/" component={AppSub} />
          <Route exact path="/cookies" component={CookiesComponent} />
          <Route exact path="/terms" component={TermsComponent} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
