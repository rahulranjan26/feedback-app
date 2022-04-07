import React from "react";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
import FeedBackItem from "./FeedBackItem";
import Spinner from "./shared/Spinner";

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedBackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback present.Please give the feedback</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
