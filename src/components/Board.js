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

  //populate cards
  useEffect(() => {
    axios.get(API_URl_BASE + "/cards") 
      .then((res) => {
        const apiCardsData = res.data;
        console.log(res)
        console.log(apiCardsData);
        setCards(apiCardsData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [props.boardName]);

  const cardComponents = () => {
    return cards.map((cardh) => {
      console.log(cardh)
      return (
        <section key={cardh.card.id}>
          <Card id={cardh.card.id} text={cardh.card.text} emoji={cardh.card.emoji} />
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
      {/* add () to call the fuction, without () is only referencing it */}
      <section className="board">{cardComponents()}</section> 
    </div>
  );
};

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
