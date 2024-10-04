import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonProps = {
  onClick: (e: any) => void;
  content: ReactNode;
  disabled?: boolean;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { content, onClick, disabled, className } = props;

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'border border-black py-1 text-white cursor-pointer px-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:rounded-lg active:bg-blue-700',
        className,
      )}
    >
      {content}
    </button>
  );
}
