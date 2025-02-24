// src/components/ProgressTracker.js
import { useEffect, useState } from 'react';

const ProgressTracker = ({ lessonId }) => {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    setCompleted(progress[lessonId] || false);
  }, [lessonId]);

  const markCompleted = () => {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    progress[lessonId] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
    setCompleted(true);
  };

  return (
    <div className="mt-4">
      {completed ? (
        <span className="text-green-500">Completed</span>
      ) : (
        <button
          onClick={markCompleted}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default ProgressTracker;