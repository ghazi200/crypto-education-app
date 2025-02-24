// src/pages/quiz.js
import Quiz from '../components/Quiz';

const questions = [
  {
    id: 1,
    text: 'What is the main purpose of a blockchain?',
    options: ['Data storage', 'Decentralized ledger', 'Cryptocurrency mining'],
    correctAnswer: 'Decentralized ledger',
  },
  {
    id: 2,
    text: 'Who created Bitcoin?',
    options: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Elon Musk'],
    correctAnswer: 'Satoshi Nakamoto',
  },
];

export default function QuizPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Crypto Quiz</h1>
      <Quiz questions={questions} />
    </div>
  );
}