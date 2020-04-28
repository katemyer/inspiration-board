import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

const App = () => {
  const [boardName, setBoardName] = useState("katemangubat_board");
  //event handler
  const onBoardChange = (event) => {
    setBoardName(event.target.value)
  }
  
  return (
    <section>
      <header className="header">
        <h1 className="header__h1">
          <span className="header__text">{boardName} of Inspirations</span>
        </h1>
      </header>
      <div className="header__h1">

        <label for="boards">Choose a Board:</label>
        <select 
          id="boards"
          name="boards"
          value={boardName}
          onChange={onBoardChange}
          >
          <option value="katemangubat_board">Kate</option>
          <option value="shonds_dubs">Shonda</option>
        </select>




      </div>
      <Board
        url="https://inspiration-board.herokuapp.com/"
        boardName={boardName}
      />
    </section>
  );
};

export default App;
