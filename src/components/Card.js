import React, { useState } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";
import axios from "axios";
//import Axios from "axios";

const Card = (props) => {

  //*need to get id from card
  const onClickGetCardId = () => {
    //already have this id={cardh.card.id},  accessible at board.js, so it's a prop
    const id = props.id
    props.onDeleteClick(id)
  }

  return (
    <div className="card">
      <section className="card_content">
        <p className="card__content-text"> {props.text} </p>
        <section className="card__content-emoji">
          {emoji.getUnicode(`${props.emoji}`)}
        </section>
        <button onClick={onClickGetCardId}>Delete</button>
      </section>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
