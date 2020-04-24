import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      error: "",
    };
  }

  componenentDidMount() {
    axios
      .get(`${this.props.url}/${this.props.boardName}/cards`)
      .then((res) => {
        this.setState({
          cards: res.data,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  makeBoard = () => {
    const boardComponents = this.state.cards.map((card, i) => {
      return (
        <Card
          id={card.card.id}
          cardText={card.card.text}
          cardEmoji={card.card.emoji}
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

Board.propTypes = {
  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
