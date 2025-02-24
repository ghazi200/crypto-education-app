// src/pages/index.js
import Link from 'next/link';

const lessons = [
  { id: '1', title: 'Introduction to Blockchain' },
  { id: '2', title: 'What is Bitcoin?' },
  { id: '3', title: 'Understanding Smart Contracts' },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Crypto Education App</h1>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id} className="mb-4">
            <Link href={`/lessons/${lesson.id}`}>
              <a className="text-blue-500 hover:underline">{lesson.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}