import React from "react";

import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
function FeedBackStats() {
  const { feedback } = useContext(FeedBackContext);
  let average = feedback.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);
  average = (average / feedback.length).toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>Total Reviews : {feedback.length}</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedBackStats;
