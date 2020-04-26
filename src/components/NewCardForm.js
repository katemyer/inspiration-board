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
];
//Create a NewCardForm component which will add new cards to the board and trigger POST requests to the API to create a card on the API.
const NewCardForm = (props) => {
  //STATE
  const [formFields, setFormFields] = useState({
    text: "",
    emoji: "",
  });
  // event handler
  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
    console.log(newFormFields);
  };
  //submitting form "ok"
  const onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target)
    props.onAddCard(formFields);
    //resets fields
    setFormFields({
      text: "",
      emoji: "",
    });
  };
  //https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  //error for child needing unique key. when added key={index} error went away
  const generateEmojiOptions = () => {
    return EMOJI_LIST.map((emoji, index) => {
      return (
        <option key={index} value={emoji}>
          {emoji}
        </option>
      );
    });
  };
  return (
    <form
      className="new-card-form"
      onSubmit={onFormSubmit}
      data-testid="NewCardForm--form"
    >
      <div>
        <label className="new-card-form__form-label" htmlFor="text">
          Text:
        </label>
        <input
          id="text"
          name="text"
          value={formFields.text}
          onChange={onInputChange}
          className=""
        />
      </div>
      <div>
        <label className="new-card-form__form-label" htmlFor="emoji">
          Emoji:
          <select
            id="emoji"
            name="emoji"
            value={formFields.emoji}
            onChange={onInputChange}
          >
            {generateEmojiOptions()}
          </select>
        </label>
        {/* <input
          id="emoji"
          name="emoji"
          value={formFields.emoji}
          onChange={onInputChange}
          className=""
        /> */}
      </div>
      <input type="submit" value="Add Card" />
    </form>
  );
};
NewCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired,
};
export default NewCardForm;
