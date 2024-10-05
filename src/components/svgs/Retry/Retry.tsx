type RetryProps = {
  color?: string;
  title?: string;
  className?: string;
};

export default function Retry(props: RetryProps) {
  const { className, color, title = 'retry' } = props;

  return (
    <svg
      stroke={color}
      className={className}
      version='1.1'
      viewBox='0 0 41.228 37.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>

      <path d='m18.533 37.1a18.55 18.55 0 1 1 18-23.1l1.18-1.3a2.0147 2.0147 0 0 1 3 2.69l-4.18 4.53a2 2 0 0 1-3.48-1.34 14.56 14.56 0 1 0-14.52 14.52 14.41 14.41 0 0 0 10.45-4.43 2.0014 2.0014 0 0 1 2.88 2.78 18.38 18.38 0 0 1-13.33 5.65z' />
      <path d='m35.043 20.55a2 2 0 0 1-0.91-0.22l-4.7-2.41a2.0014 2.0014 0 1 1 1.83-3.56l4.69 2.41a2 2 0 0 1-0.91 3.78z' />
    </svg>
  );
}
