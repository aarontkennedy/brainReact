import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <h1 className="text-center mt-3">
                <img className="Home-shapeDecoration" alt="decoration" src="/images/purpleDiamondSmall.png"/>
                BrainReact
                <img className="Home-shapeDecoration" alt="decoration" src="/images/yellowStarSmall.png"/>
                </h1>
                <h3 className="text-center mt-3">A Memory Challenge Game</h3>
                <p className="mt-5">
                    Challenge yourself and improve your memory by playing BrainReact!
                </p>
                <p>
                    You will be give a bunch of cards and must click on each one only once. If you click on one a second time, you lose.  After you choose a card, they will be shuffled randomly.  </p>
                <p>Make sure you are paying attention!
                </p>
                <div className="text-center mt-5 mb-5">
                    <Link to="/game/easy" className="btn btn-primary btn-lg" >
                        Play!
                </Link>
                </div>

            </div>
            <div className="col-12 col-md-6">
                video to go here?
        </div>
        </div>
    </div>
);

export default Home;