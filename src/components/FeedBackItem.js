import React from "react";
// import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";
function FeedBackItem({ item }) {
  // const [rating, setRating] = useState(0);
  // const [text, setText] = useState("Hello This is first ratings");
  const { handleDelete, handleEdit } = useContext(FeedBackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
