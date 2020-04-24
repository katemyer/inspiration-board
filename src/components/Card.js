import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      Message: <br />
      {props.text} <br />
      Emoji: <br />
      {props.emoji} <br />
    </div>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};

export default Card;
