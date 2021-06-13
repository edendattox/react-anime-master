import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
             <div className="item"><a href="#">News</a></div>
             <div className="item"><a href="#">FAQ</a></div>
             <div className="item"><a href="#">Reddit</a></div>
             <div className="item"><a href="#">Hall of Fame</a></div>
            </div>

        <div className="footer__bottom">
            <div className="item"><a href="#">Donate</a></div>
            <div className="item"><a href="#">Privacy</a></div>
            <div className="item"><a href="#">Password</a></div>
            <div className="item"><a href="#">Simply</a></div>
        </div> 
        </div>
    )
}

export default Footer
