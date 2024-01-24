import Link from 'next/link'
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!);

async function Quizzes() {
  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.id}>
<Link href={`/quiz/${quiz.id}`}>{quiz.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <section>
      <h1>All Quizzes</h1>
     <Quizzes />
    </section>
  );
}
