import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

class Board extends Component {
  state = {
    boards: [],
  };

  componenentDidMount() {
    axios.get(`https://inspiration-board.herokuapp.com/boards`).then((res) => {
      console.log(res);
      this.setState({ boards: res.data });
    });
  }
  makeBoard = () => {
    const boardComponents = CARD_DATA.cards.map((card, i) => {
      return (
        <Card
          cardText={card.Text}
          cardEmoji={card.emoji}
          id={card.id}
          key={i}
        />
      );
    });
    return boardComponents;
  };
  render() {
    return (
      <div>
        <section className="board">{this.makeBoard()}</section>
      </div>
    );
  }
}

// Board.propTypes = {};

export default Board;
