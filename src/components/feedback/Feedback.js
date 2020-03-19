import React from "react";


const Feedback = ({ onLeaveFeedback }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <button name="good" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
      <h2>Statistics</h2>
    </>
  );
};

export default Feedback;

