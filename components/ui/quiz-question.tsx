import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface QuizQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  questionNumber: number;
  allQuestionsNumebr: number;
  question: string;
}

const QuizQuestion: FunctionComponent<QuizQuestionProps> = ({
  questionNumber,
  allQuestionsNumebr,
  question,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-6 flex flex-col items-start gap-6 rounded-lg bg-[#E4E3FF] w-full',
        className
      )}
    >
      <div className="bg-[#2F2D83] flex items-center justify-center h-12 aspect-square  text-white rounded-lg  text-sm font-semibold ">
        {questionNumber} / {allQuestionsNumebr}
      </div>
      <h1 className="text-gray-900 font-semibold text-2xl">{question}</h1>
    </div>
  );
};

export default QuizQuestion;
