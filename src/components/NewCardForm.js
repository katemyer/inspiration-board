import React, { useState } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog",
  "grin",
];

const NewCardForm = (props) => {
  const [newCardText, setNewCardText] = useState([]);
  const [newCardEmoji, setNewCardEmoji] = useState([]);
  const emojiValue = [emoji.getUnicode(`${newCardEmoji}`)];

  const addTextChange = (event) => {
    setNewCardText(event.target.value);
  };
  const addEmojiChange = (event) => {
    setNewCardEmoji(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(newCardText, newCardEmoji);
    setNewCardText("");
    setNewCardEmoji("");
  };

  return (
    <div className="new-card-form">
      <h3 className="new-card-form__header">Make a New Sticky</h3>
      <form className="new-card-form__form">
        <div>
          <input
            className="new-card-form__form-textarea"
            name="text"
            onChange={addTextChange}
            value={newCardText}
            placeholder="Say Something"
            type="text"
          />
          <input
            className="new-card-form__form-textarea"
            name="emoji"
            onChange={addEmojiChange}
            value={newCardEmoji}
            placeholder="Say Something Emoji's"
            type="text"
          />
          <div>
            <button className="new-card-form__form-button" onClick={onSubmit}>
              Post!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
export default NewCardForm;
