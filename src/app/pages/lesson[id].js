// src/pages/lessons/[id].js
import fs from 'fs';
import path from 'path';
import Lesson from '../../components/Lesson';
import ProgressTracker from '../../components/ProgressTracker';

export async function getStaticPaths() {
  const lessonsDir = path.join(process.cwd(), 'public', 'lessons');
  const filenames = fs.readdirSync(lessonsDir);
  const paths = filenames.map((filename) => ({
    params: { id: filename.replace('.md', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const lessonPath = path.join(process.cwd(), 'public', 'lessons', `${params.id}.md`);
  const content = fs.readFileSync(lessonPath, 'utf8');
  return { props: { content, id: params.id } };
}

export default function LessonPage({ content, id }) {
  return (
    <div>
      <Lesson content={content} />
      <ProgressTracker lessonId={id} />
    </div>
  );
}