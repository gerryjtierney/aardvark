import React, { Component } from "react";




class CookiesComponent extends Component {

    state = {
        toggled: false,
    }



    toggle = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }



    render() {




        return (



            <div className="CookiesComponentContent">
                <div onClick={this.toggle} className="menuButton">Cookies</div>
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 
                A big bunch of text 





            </div>
        )
    }
}


export default CookiesComponent;