import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>BrainReact => Memory Challenge Game</h1>
        <p>
            Challenge yourself and improve your memory by playing BrainReact!
            You will be give a bunch of cards and must click on each one only once.  If you click on one a second time, you lose.  After you choose a card, they will be shuffled randomly.  Make sure you are paying attention!
    </p>
        <Link to="/game/easy" className="btn btn-primary btn-lg" >
            Play!
        </Link>
    </div>
);

export default Home;