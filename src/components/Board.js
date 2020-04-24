import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

const Board = () => {
  const boardComponents = CARD_DATA.cards.map((card, i) => {
    return (
      <Card
        cardMessage={card.message}
        cardEmoji={card.emoji}
        id={card.id}
        key={i}
      />
    );
  });
  return boardComponents;
};
Board.propTypes = {};

export default Board;
