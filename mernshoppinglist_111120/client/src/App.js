import React from 'react';
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store"

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import PrimaryMenuModal from "./components/PrimaryMenuModal"

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Container>



        
 
      <PrimaryMenuModal />



          

        </Container>
      </div>
    </Provider>
  );
}

export default App;
