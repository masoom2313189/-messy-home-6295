import React from 'react'
import "./style.css"

const Nav = () => {
  return (
    <div>
        <div id="main-navbar">
    <nav id="navbar-3">
        <div className="wrapper">
            <ul className="nav-links">
                <i className="fa fa-bars" aria-hidden="true"></i>
                <li><a href="./today.html">SALE</a></li>
                <li>
                    <a href="./news.html">MAKEUP</a>
                        <ul className="drop-menu">
                        {/* <li><a href="#"></a></li> */}
                </ul>
                </li>
                <li>
                    <a href="#">SKINCARE</a>
                        <ul className="drop-menu">
                        {/* <li><a href="#"></a></li> */}
                </ul>
                </li>
                <li>
                    <a href="./business.html">FRAGRANCE</a>
                        <ul className="drop-menu">
                        {/* <li><a href="#"></a></li> */}
                </ul>
                </li>
                <li>
                    <a href="./sports.html">HAIRCARE</a>
                        <ul className="drop-menu">
                        {/* <li><a href="#"></a></li> */}
                </ul>
                </li>
                <li>
                    <a href="entertainment.html">TOOLS & BRUSHES</a>
                        <ul className="drop-menu">
                        {/* <li><a href="#"></a></li> */}
                </ul>
                </li>
                <li><a href="./crossword.html">BRANDS</a></li>
            </ul>
        </div>
    </nav>
    </div>
    </div>
  )
}

export default Nav