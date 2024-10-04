type XMarkProps = {
  color?: string;
  title?: string;
  className?: string;
};

export default function XMark(props: XMarkProps) {
  const { color = 'currentColor', className, title } = props;

  return (
    <svg viewBox='0 0 100 100' strokeWidth={8} stroke={color} strokeLinecap='round' className={className}>
      <title>{title}</title>

      <line x1='20' y1='20' x2='80' y2='80' />
      <line x1='20' y1='80' x2='80' y2='20' />
    </svg>
  );
}
