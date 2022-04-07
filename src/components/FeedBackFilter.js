import React from "react";
import Button from "./shared/Button";
function FeedBackFilter({ filterHandler }) {
  const handleFilter = (e) => {
    filterHandler(+e.target.value);
  };
  return (
    <>
      <div className="filter">
        <input
          type="text"
          placeholder="Select a number between 1 to 10"
          onChange={handleFilter}
        />
      </div>
    </>
  );
}

export default FeedBackFilter;
