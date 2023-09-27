import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { FunctionComponent } from 'react';
import { Button } from './button';
import { AiOutlineCheckCircle } from 'react-icons/ai';
interface ExplanantionProps {
  title: string;
  description: string;
  disabled: boolean;
}

const Explanantion: FunctionComponent<ExplanantionProps> = ({
  title,
  description,
  disabled,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        disabled={disabled}
        className="px-4 py-2 bg-[#E0E7FF] text-indigo-700 rounded-lg cursor-pointer disabled:cursor-default disabled:opacity-50"
      >
        Explanation
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-center rounded-lg">
            <AlertDialogCancel className="w-12 aspect-square flex items-center justify-center shrink-0 bg-teal-50">
              <AiOutlineCheckCircle className={'w-6 h-6 text-teal-700'} />
            </AlertDialogCancel>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="space-y-2">
          <h1 className="text-gray-900 font-medium">{title}</h1>
          <p>{description}</p>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Explanantion;
