import Answer from '@/components/ui/answer';
import QuizQuestion from '@/components/ui/quiz-question';
import Quiz from '@/components/views/quiz';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Quiz />
    </main>
  );
}
