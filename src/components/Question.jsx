import React, { useState } from "react";
import "../styles/components/Question.scss";

const Question = ({ question, answer }) => {
  const [activeAnswer, setActiveAnswer] = useState(false);

  return (
    <article className="question-container">
      <h2 className={`question ${activeAnswer && "question-active"}`}>
        {question}
      </h2>
      <p className={`answer ${activeAnswer && "answer-active"}`}>{answer}</p>
      <div
        className="show-answer"
        onClick={() => setActiveAnswer(!activeAnswer)}
      >
        <span className={`line ${activeAnswer && "active-answer"}`}></span>
      </div>
    </article>
  );
};

export default Question;
