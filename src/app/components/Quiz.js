// src/components/Quiz.js
import { useState } from 'react';

const Quiz = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      return selectedAnswers[question.id] === question.correctAnswer
        ? score + 1
        : score;
    }, 0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{question.text}</h3>
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(question.id, option)}
              className={`block w-full p-2 mb-2 rounded ${
                selectedAnswers[question.id] === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
      <button
        onClick={() => setShowResults(true)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
      {showResults && (
        <div className="mt-4 text-xl font-semibold">
          Your score: {calculateScore()} / {questions.length}
        </div>
      )}
    </div>
  );
};

export default Quiz;