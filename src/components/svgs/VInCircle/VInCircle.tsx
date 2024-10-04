type VInCircleProps = {
  color?: string;
  fillColor?: string;
  borderColor?: string;
  title?: string;
  className?: string;
};

export default function VInCircle(props: VInCircleProps) {
  const { color = 'black', fillColor = 'none', borderColor, title = 'v in a circle', className } = props;

  return (
    <svg
      viewBox='0 0 20 20'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      className={className}
    >
      <title>{title}</title>

      <circle cx='10' cy='10' r='9' stroke={borderColor || color} fill={fillColor} />
      <line x1='8.7' y1='13' x2='14.2' y2='7' />
      <line x1='5.9' y1='10.33' x2='8.7' y2='13' />
    </svg>
  );
}
