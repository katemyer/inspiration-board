import React from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";
//import Axios from "axios";

const Card = (props) => {
  return (
    <div className="card">
      <section className="card_content">
        <p className="card__content-text"> {props.text} </p>
        <section className="card__content-emoji">
          {emoji.getUnicode(`${props.emoji}`)}
        </section>
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
