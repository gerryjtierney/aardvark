import React, { Component } from "react";
import "./Popups.css"
//import { Link } from "react-router-dom";

class PopupContact extends Component {
  constructor(props) {
    super(props);
    this.defaultDelete = this.defaultDelete.bind(this);
    this.defaultDelete2 = this.defaultDelete2.bind(this);
  }


  componentDidMount() {
    const element = document.getElementById("userMessage");

    element.scrollIntoView({ behavior: 'smooth', block: "center" });
  }



  render() {
    return (





      <div className="PopupContact">


        <form action="https://formspree.io/mleoeqve" method="POST" className="PopupContactForm">
          <input type="text" id="userEmail" name="_replyto" placeholder="email@example.com" onFocus={this.defaultDelete} />
          <textarea name="message" type="text" onFocus={this.defaultDelete2} id="userMessage" placeholder="Your message" className="textareao"></textarea>
          <button type="submit" id="contactSend">Send</button>
        </form>

      </div>
    )
  };


  defaultDelete() {

    document.getElementById("userEmail").value = "";

  }


  defaultDelete2() {
    document.getElementById("userMessage").placeholder = "";
  }



}

export default PopupContact;


//<div className="PopupMenu-close-text">
//<Link to="/">Back</Link>
//</div>