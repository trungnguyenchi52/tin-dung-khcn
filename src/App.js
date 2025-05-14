import React, { useState } from "react";
import quizData from "./questions.json";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const question = quizData[currentIndex];

  const handleAnswer = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
      setIsCorrect(index === question.answer);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getOptionClass = (index) => {
    if (selectedOption === null) return "option";
    if (index === selectedOption && isCorrect) return "option correct";
    if (index === selectedOption && !isCorrect) return "option wrong";
    return "option";
  };

  return (
    <div className="container">
      <h1>TÍN DỤNG KHCN Đợt 1 2025</h1>
      <h2>{`Câu ${currentIndex + 1}/${quizData.length}`}</h2>
      <p>{question.question}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index} className={getOptionClass(index)} onClick={() => handleAnswer(index)}>
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Tiếp theo</button>
    </div>
  );
}