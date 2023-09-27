import { FunctionComponent } from 'react';
import Container from '../common/container';
import { AiFillCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { cn } from '@/lib/utils';

interface ResultsProps extends React.HTMLAttributes<HTMLDivElement> {
  isGood: boolean;
  score: number;
}

const Results: FunctionComponent<ResultsProps> = ({ isGood, score }) => {
  return (
    <Container
      className={cn(
        'flex gap-4 items-start p-4',
        isGood ? 'bg-teal-50' : 'bg-red-50'
      )}
    >
      <div className="w-5 h-5 shrink-0 flex items-center justify-center">
        {isGood ? (
          <AiOutlineCheckCircle className="w-4 h-4 text-teal-700 " />
        ) : (
          <AiFillCloseCircle className="w-4 h-4 text-red-700 " />
        )}
      </div>
      <div>
        <p className={cn('mb-2', isGood ? 'text-teal-800' : 'text-red-800 ')}>
          You got {score}/2
        </p>
        <ul
          className={cn(
            'list-disc ml-4 ',
            isGood ? 'text-teal-700' : 'text-red-700'
          )}
        >
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Sed do eiusmod tempor incididunt ut labore</li>
        </ul>
      </div>
    </Container>
  );
};

export default Results;
