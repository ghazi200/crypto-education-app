// src/components/Lesson.js
import ReactMarkdown from 'react-markdown';

const Lesson = ({ content }) => {
  return (
    <div className="prose max-w-4xl mx-auto p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Lesson;