import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface AnswerProps extends React.HTMLAttributes<HTMLButtonElement> {
  isCorrect: boolean;
  revealIsCorrect?: boolean;
  answer: string;
  index: number;
  disabled?: boolean;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const Answer: FunctionComponent<AnswerProps> = ({
  isCorrect,
  index,
  answer,
  className,
  revealIsCorrect = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        'flex items-center rounded-lg overflow-hidden w-full shadow-inner  ',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-[#2F2D83] flex items-center justify-center  w-16 h-14  text-white  transition-colors duration-500 ease-in-out shrink-0  ',
          revealIsCorrect && (isCorrect ? 'bg-[#40CE57]' : 'bg-[#D41515]')
        )}
      >
        {LETTERS[index]}
      </div>

      <p className="text-gray-900 font-medium text-sm px-4 text-left">
        {answer}
      </p>
    </button>
  );
};

export default Answer;
