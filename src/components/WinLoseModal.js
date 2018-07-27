import React from "react";
import { Link } from "react-router-dom";
import './WinLoseModal.css';

const WinLoseModal = (props) => (
    <div className="WinLoseModal">
        <h1>You {props.win ? "Win" : "Lose"}!</h1>
        <h2>Play Again?</h2>
        <div className="text-center">
                    <Link to="/game/easy" className="btn btn-primary btn-lg" >
                        Easy
                    </Link>
                    <Link to="/game/medium" className="btn btn-primary btn-lg" >
                        Medium
                    </Link>
                    <Link to="/game/hard" className="btn btn-primary btn-lg" >
                        Hard
                    </Link>
                    <Link to="/" className="btn btn-danger btn-lg" >
                        Cancel
                    </Link>
            </div>
    </div>
);

export default WinLoseModal;