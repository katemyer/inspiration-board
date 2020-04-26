import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
// import NewCardForm from "./NewCardForm";
// import CARD_DATA from "../data/card-data.json";

const Board = (props) => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //populate cards on start up
  useEffect(() => {
    axios
      .get(`${props.url}boards/${props.boardName}/cards`)
      .then((res) => {
        const apiCardsData = res.data;
        //console.log(res)
        //console.log(apiCardsData);
        setCards(apiCardsData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      });
  }, [props.boardName]);

  const cardComponents = () => {
    return cards.map((cardh) => {
      //console.log(cardh)
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

  //name of function onDeleteClick = delete a card, need to pass in id
  //Step 1: get the id from the card component in card.js *go see card.js
  //Step 2: to get to id, need to make a function in the card.js = getCardId()
  //Step 2a: passing in id, now have access to id from this function getCardId() in card.js
  //Step 3: passing in onDeleteClick function on CARD object (line 37) so we have access to onDeleteClick function
  //Step 4: go back to card.js and call this function as props.onDeleteClick(id) so that card has access to it
  //Step 5: hook up the onClickGetCardId to the <button> in card.js
  //step 6: complete onDeleteClick function
  const onDeleteClick = (id) => {
    // post call to delete card via id
    console.log("Deleting");
    axios
      //example url for delete cards: https://inspiration-board.herokuapp.com/cards/6336
      //Note A. delete card from API FIRST
      .delete(`${props.url}cards/${id}`)
      .then((res) => {
        const apiDeleteData = res.data;
        console.log("Deleted");
        console.log(res);
        console.log(apiDeleteData);
        // Step 7. Get all cards via api so it reloads the page after deleting a card
        //Note B. If delete is successul, GET the cards from API
        console.log("Getting");
        axios
          .get(`${props.url}boards/${props.boardName}/cards`)
          .then((res) => {
            console.log("Getted");
            const apiCardsData = res.data;
            //console.log(res)
            //console.log(apiCardsData);
            console.log("Reloading");
            //Note C. if GET cards is successful, update front-end here
            setCards(apiCardsData);
            console.log("Reloaded");
          })
          .catch((error) => {
            setErrorMessage(error.message);
            console.log(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error.message);
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
