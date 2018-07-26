import React, { Component } from "react";
import cards from "../cards.json";
import Card from "../Card";

class Game extends Component {
    state = {
        score: 0,
        cards: cards
    };

    componentWillMount() {
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
        this.columnWidth = 12/this.numColumns;

        this.shuffleCards();

        this.setState({cards: this.state.cards.slice(0, this.numCards)});

        this.state.cards.forEach((c, index) => {
            c.id = index;
            c.clicked = false;
        });
    }

    shuffleCards() {
        function shuffle(array) {
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

        this.setState({cards: shuffle(this.state.cards)});
    }

    incrementScore = () => {
        //alert(this.state.score + 1);
        this.setState({ score: this.state.score + 1 });
    }

    handleClick = event => {
        const c = event.target;
        const indexClicked = c.getAttribute("data-id");
        c.className += " clicked"; // for debugging

        this.state.cards.sort((a, b) => ( a.id - b.id ));
        console.log(this.state.cards);
        console.log(event.target);

        if (this.state.cards[indexClicked].clicked) {
            this.handleLoss();
        }
        else {
            // eslint-disable-next-line
            this.state.cards[indexClicked].clicked = true;
            this.incrementScore();
        }

        // did they win?
        if (this.numCards === 
            this.state.cards.reduce((total, currentValue)=>(total+currentValue.clicked), 0)) {
            this.handleWin();
        }
        else {
            this.shuffleCards();
        }
    };

    handleWin() { alert("you win"); }

    handleLoss() { alert("you loss"); }

    render() {
        return (
            <div className="row text-center">
                {this.state.cards.map((c) => (
                    <div key={c.id} className={"col-"+this.columnWidth}>
                        <Card
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            handleClick={this.handleClick}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Game;