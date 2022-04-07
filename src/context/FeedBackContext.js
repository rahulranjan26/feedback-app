/* eslint-disable no-unused-vars */
import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedBack] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();
    setFeedBack(data);
    setIsLoading(false);
  };

  // This is Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      const newList = feedback.filter((item) => item.id !== id);
      setFeedBack(newList);
      // console.log("App", id);
    }
  };

  // This is Add
  const handleAddOps = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    setFeedBack([data, ...feedback]);
  };

  // This is Update
  const handleEdit = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // This is updateList
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  

  return (
    <FeedBackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        handleAddOps,
        handleEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
