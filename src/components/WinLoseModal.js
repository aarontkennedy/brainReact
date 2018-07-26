import React from "react";
import { Link } from "react-router-dom";
import './WinLoseModal.css';

const WinLoseModal = (props) => (
    <div>
        <h1>You {props.win ? "Win" : "Lose"}!</h1>
        <h2>Play Again?</h2>
        <ul className="nav">
                <li className="nav-item">
                    <Link to="/game/easy" className="btn btn-primary btn-lg" >
                        Easy
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/game/medium" className="btn btn-primary btn-lg" >
                        Medium
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/game/hard" className="btn btn-primary btn-lg" >
                        Hard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="btn btn-danger btn-lg" >
                        Cancel
                    </Link>
                </li>
            </ul>
    </div>
);

export default WinLoseModal;