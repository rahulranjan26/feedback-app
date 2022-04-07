import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackForm() {
  const [text, setTextChange] = useState("");
  const [rating, setRating] = useState(10);
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { handleAddOps, feedbackEdit, updateFeedback } =
    useContext(FeedBackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setTextChange(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("The review is less than 10 chars");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setTextChange(e.target.value);
  };

  const handleSelect = (rating) => {
    // console.log(rating);
    setRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        handleAddOps(newFeedback);
      }
    }

    setTextChange(" ");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate our services?</h2>
        <RatingSelect select={handleSelect} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write Review..."
            value={text}
          />
          <Button type="submit" isDisabled={isBtnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedBackForm;
