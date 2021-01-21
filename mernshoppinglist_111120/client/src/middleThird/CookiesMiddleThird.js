import React, { Component } from 'react'


class CookiesMiddleThird extends Component{


    render(){
        return(
            <div className="CookiesMiddleThird">
                <div className="titleText">
                    <div className="titleTextInternal"><u>Cookie Policy &nbsp; </u></div>
                </div>
                <div className="cookieChunk1">
                        <div className="paragraphText">
                            A cookie, also known as an HTTP cookie, web cookie, or browser cookie,
                            is a piece of data stored by a website within a browser, and then subsequently sent back to the same website by the browser.
                            Cookies were designed to be a reliable mechanism for websites to remember things that a browser/user had done there in the past,
                            which can include having clicked particular buttons, logging in, having read pages on that site, usage statistics for a given
                            site and compiling long-term records of browsers/users histories.
                        </div>
                    </div>


                    <div className="cookieChunk2">
                        <div className="subTitleText">How Katie's Uses Cookies</div>
                        <div className="paragraphText">
                            Information supplied by cookies can help us to analyse the profile of our visitors and help
                            provide you with a better user experience.
                            A visit to a page on the site may generate "Session cookies" or "Google Analytics cookies"

                        </div>
                    </div>


                    <div className="cookieChunk3">
                        <div className="subTitleText">Session Cookies</div>
                        <div className="paragraphText">
                            Session Cookies are used to store information about user page activities so users can easily
                            pick up where they left off on the server’s pages. By default, web pages really don’t have any ‘memory’.
                            Cookies tell the server what pages to show the user so the user doesn’t have to remember or start navigating
                            the site all over again. Cookies act as a sort of ‘bookmark’ within the site.
                        </div>
                    </div>




                    <div className="cookieChunk4">
                        <div className="subTitleText">Google Analytics Cookies</div>
                        <div className="paragraphText">
                            Every time a user visits our website, Google Analytics generates anonymous analytics cookies.
                            These cookies can tell us whether or not you’ve visited the site before. Your browser will tell us
                            if you have these cookies, and if you don’t, we generate new ones.
                            This allows us to track how many individual unique users we have, and how often they visit the site.
                        </div>
                    </div>


                    <div className="cookieChunk5">
                        <div className="subTitleText">Hhow To Control And Delete Cookies</div>
                        <div className="paragraphText">
                            If you prefer, you can restrict, block or delete cookies by changing your browser settings.
                            All modern browsers allow users to change the cookie settings, which typically can be found in the ‘preferences’
                            or options menu of your browser.
                        </div>
                    </div>
            </div>
        )
    }
}

export default CookiesMiddleThird;