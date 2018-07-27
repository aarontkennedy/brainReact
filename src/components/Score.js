import React from "react";
import './Score.css';

const Score = (props) => (
    <div className="Score">
        <h2>Score: {props.score} - 
        High: {props.highScore}
        </h2>
    </div>
);

export default Score;