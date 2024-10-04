import type { ReactNode } from 'react';
import clsx from 'clsx';

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
        'cursor-pointer rounded-md border border-black bg-blue-500 px-2 py-1 text-white hover:rounded-lg hover:bg-blue-600 active:bg-blue-700',
        className,
      )}
    >
      {content}
    </button>
  );
}
