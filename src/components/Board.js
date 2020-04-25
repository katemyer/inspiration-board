import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
// import NewCardForm from "./NewCardForm";
// import CARD_DATA from "../data/card-data.json";

const Board = (props) => {
  const API_URl_BASE = `${props.url}/${props.boardName}`;

  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get(API_URl_BASE)
      .then((res) => {
        const apiCardsData = res.data;
        console.log(apiCardsData);
        setCards(apiCardsData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [props.boardName]);

  const cardComponents = () => {
    return cards.map((card) => {
      return (
        <section key={card.id}>
          <Card id={card.id} text={card.text} emoji={card.emoji} />
        </section>
      );
    });
  };
  return (
    <div className="validation-errors-display">
      {errorMessage && (
        <div className="validation-errors-display_list">
          <h2>{errorMessage}</h2>
        </div>
      )}
      <section className="board">{cardComponents}</section>
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
