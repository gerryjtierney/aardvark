import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Popups.css";
import "../App.css";
import "../AppSub.css"





class PopupMenu extends Component {

    componentDidMount() {
        document.getElementById('root').scrollTop = 0;
    }

    render() {

        return (
            <div className="PopupMenu">
                <div className="PopupMenu-title">Katie's</div>
                <div className="PopupMenu-close">
                    <div className="PopupMenu-close-text"><Link to="/">Back</Link></div>
                </div>
                <div className="PopupMenu-starters">
                    <div className="PopupMenu-starters-title">Starters</div>
                    <div className="PopupMenu-starters-text">
                        Fish finger sandwich £4.99 <br />
                        Brocolli and stilton soup £4.99<br />
                        Katie's starter platter £5.99<br />
                    </div>
                </div>
                <div className="PopupMenu-mains">
                    <div className="PopupMenu-mains-title">Mains</div>
                    <div className="PopupMenu-mains-text">
                        Liver and onions - £7.95<br />
                        Pie and mash - £6.95<br />
                        Vegetarian quiche - £5.95<br />
                        Mince and totties - £6 .95
                    </div>
                </div>
                <div className="PopupMenu-desserts">
                    <div className="PopupMenu-desserts-title">Desserts</div>
                    <div className="PopupMenu-desserts-text">
                        Liver and onions - £7.95<br />
                        Pie and mash - £6.95<br />
                        Vegetarian quiche - £5.95<br />
                        Mince and totties - £6 .95
                    </div>
                </div>
                <div className="PopupMenu-beers">
                    <div className="PopupMenu-beers-title">Beers</div>
                    <div className="PopupMenu-beers-text">
                        Tennent's (4%) £3.95<br />
                    Stella Artois (4%) £4.25 <br />
                    Becks Blue (0%) £1.95
                    </div>
                </div>
                <div className="PopupMenu-wines">
                    <div className="PopupMenu-wines-title">Wines</div>
                    <div className="PopupMenu-wines-text">
                        Crisp white - £4.15<br />
                        Bold red - £4.95<br />
                        Katie's house carafe - £6.55<br />
                    </div>
                </div>
                <div className="PopupMenu-cocktails">
                    <div className="PopupMenu-cocktails-title">Cocktails</div>
                    <div className="PopupMenu-cocktails-text">
                        Crisp white - £4.15<br />
                        Bold red - £4.95<br />
                        Katie's house carafe - £6.55<br />
                    </div>
                </div>
                <div className="PopupMenu-hotdrinks">
                    <div className="PopupMenu-hotdrinks-title">Teas & Coffees</div>
                    <div className="PopupMenu-hotdrinks-text">
                        Earl Grey - £2.95<br />
                        Cappuccino - £4.95<br />
                        Katie's special Assam - £5.50<br />
                    </div>
                </div>
            </div>

        )
    }
}

export default PopupMenu;