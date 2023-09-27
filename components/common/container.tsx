import { cn } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('p-4 md:p-8 lg:p-11 bg-white rounded-lg', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
