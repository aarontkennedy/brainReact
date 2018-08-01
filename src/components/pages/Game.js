import React, { Component } from "react";
import cardObjects from "../cards.json";
import Card from "../Card";
import Score from "../Score";
import WinLoseModal from "../WinLoseModal";

class Game extends Component {
    state = {
        score: 0,
        highScore: 0,
        cards: [],
        gameOver: false,
        didTheyWin: false
    };

    reset() {
        this.setState({
            score: 0,
            gameOver: false,
            didTheyWin: false
        });

        switch (this.props.difficulty) {
            case "medium":
                this.numCards = 16;
                break;
            case "hard":
                this.numCards = 36;
                break;
            default: // easy
                this.numCards = 9;
        }
        this.numColumns = Math.sqrt(this.numCards);
        this.columnWidth = 12 / this.numColumns;
        this.maxHeight = Math.round(80 / this.numColumns) + "vh";

        let shuffledCards = this.shuffleCards(cardObjects.slice(0));

        shuffledCards.forEach((c, index) => {
            c.id = index;
            c.clicked = false;
        });

        this.setState({ cards: shuffledCards.slice(0, this.numCards) });

        // http://clubmate.fi/remove-a-class-name-from-multiple-elements-with-pure-javascript/
        const imagesWrong = document.getElementsByClassName("wrong");
        while (imagesWrong[0]) {
            imagesWrong[0].classList.remove("wrong")
        }
    }

    componentWillReceiveProps(nextProps) {
        this.reset();
    }

    componentWillMount() {
        this.reset();
    }

    shuffleCards(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    incrementScore = () => {
        const newScore = this.state.score + 1;
        if (!this.state.gameOver) {
            this.setState({ score: newScore });
            if (newScore >= this.state.highScore) {
                this.setState({ highScore: newScore });
            }
        }
    }

    handleClick = event => {
        if (!this.state.gameOver) {
            const c = event.target;
            const indexClicked = c.getAttribute("data-id");

            this.state.cards.sort((a, b) => (a.id - b.id));
            //console.log(this.state.cards);
            //console.log(event.target);

            if (this.state.cards[indexClicked].clicked) {
                c.classList.add("wrong");
                setTimeout(() => (this.handleLoss()), 500); // long enough to enjoy the shake shake
            }
            else {
                // eslint-disable-next-line
                this.state.cards[indexClicked].clicked = true;
                this.incrementScore();

                // did they win?
                if (this.numCards ===
                    this.state.cards.reduce((total, currentValue) => (total + currentValue.clicked), 0)) {
                    this.handleWin();
                }
                else {
                    this.setState({
                        cards: this.shuffleCards(this.state.cards)
                    });
                }
            }
        }
    };

    handleWin() {
        this.setState({
            gameOver: true,
            didTheyWin: true
        });
    }

    handleLoss() {
        this.setState({
            gameOver: true,
            didTheyWin: false
        });
    }

    render() {
        return (
            <div className="row text-center">
                <Score score={this.state.score}
                    highScore={this.state.highScore} />
                {this.state.cards.map((c) => (
                    <div key={c.id} className={"col-" + this.columnWidth}>
                        <Card
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            handleClick={this.handleClick}
                            clicked={c.clicked}
                            maxHeight={this.maxHeight}
                        />
                    </div>
                ))}
                {this.state.gameOver ? <WinLoseModal win={this.state.didTheyWin} /> : ""}
            </div>
        );
    }
}

export default Game;