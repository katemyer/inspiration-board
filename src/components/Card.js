import React, { useState } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

const Card = (props) => {
  //*need to get id from card
  const onClickGetCardId = () => {
    //already have this id={cardh.card.id},  accessible at board.js, so it's a prop
    const id = props.id;
    props.onDeleteClick(id);
  };

  return (
    <div className="card">
      <ul className="card__content">
        <p className="card__content-text">{props.text}</p>
        <span className="card__content-emoji">
          {emoji.getUnicode(`${props.emoji}`)}
        </span>
        <button className="card__delete" onClick={onClickGetCardId}>
          Delete
        </button>
      </ul>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
