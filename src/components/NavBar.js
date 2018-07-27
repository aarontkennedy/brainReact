import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => (
    <nav className="navbar navbar-expand-md navbar-light">
        <Link to="/" className="navbar-brand NavBar-MyBrand" >
            <img id="logo" alt="logo" src="/images/logo.png" />&nbsp;
            BrainReact
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className={
                        window.location.pathname === "/" ? "nav-link active" : "nav-link"
                    } >
                        Instructions
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/game/easy" className={
                        window.location.pathname === "/game/easy" ? "nav-link active" : "nav-link"
                    } >
                        Play Easy
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/game/medium" className={
                        window.location.pathname === "/game/medium" ? "nav-link active" : "nav-link"
                    } >
                        Medium
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/game/hard" className={
                        window.location.pathname === "/game/hard" ? "nav-link active" : "nav-link"
                    } >
                        Hard
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;