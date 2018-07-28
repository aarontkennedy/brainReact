import React from "react";
import './Card.css';

const Card = (props) => (
    <img /*className={props.clicked ? "Card clicked" : "Card"}*/
        className="Card"
        style={{maxHeight: props.maxHeight}}
        data-id={props.id}
        alt={"card" + props.id}
        src={props.image}
        onClick={props.handleClick} />
);

export default Card;