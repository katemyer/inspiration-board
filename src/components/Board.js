import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

const Board = (props) => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  //function for GET and reload page used for wave 3
  const getCards = () => {
    axios
      .get(`${props.url}boards/${props.boardName}/cards`)
      .then((res) => {
        const apiCardsData = res.data;
        setCards(apiCardsData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  };
  //populate cards on start up
  useEffect(() => {
    getCards();
  }, [props.boardName]);
  const cardComponents = () => {
    return cards.map((cardh) => {
      return (
        <Card
          key={cardh.card.id}
          id={cardh.card.id}
          onDeleteClick={onDeleteClick}
          text={cardh.card.text}
          emoji={cardh.card.emoji}
        />
      );
    });
  };
  const onDeleteClick = (id) => {
    // post call to delete card via id

    axios

      .delete(`${props.url}cards/${id}`)
      .then((res) => {
        const apiDeleteData = res.data;

        getCards();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const onAddCard = (formFields) => {
    //do API post call: https://alligator.io/react/axios-react/

    axios
      .post(
        `https://inspiration-board.herokuapp.com/boards/shonds-dubs/cards`,
        formFields
      )
      .then((res) => {
        getCards();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="validation-errors-display">
      {errorMessage && (
        <div className="validation-errors-display_list">
          <h2>{errorMessage}</h2>
        </div>
      )}
      <div>
        <NewCardForm onAddCard={onAddCard} />
      </div>
      <div className="board">{cardComponents()}</div>
    </div>
  );
};
Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
