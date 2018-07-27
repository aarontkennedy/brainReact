import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <h1 className="text-center">BrainReact</h1>
                <h3 className="text-center">Memory Challenge Game</h3>
                <p>
                    Challenge yourself and improve your memory by playing BrainReact!
                </p>
                <p>
                    You will be give a bunch of cards and must click on each one only once. If you click on one a second time, you lose.  After you choose a card, they will be shuffled randomly.  </p>
                <p>Make sure you are paying attention!
                </p>
                <div className="text-center">
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