type CardProps = {
  title: string;
};

export default function Card(props: CardProps) {
  const { title } = props;

  return (
    <div className='flex size-40 cursor-pointer items-center justify-center rounded-md bg-red-50 hover:bg-red-100 active:bg-red-200 dark:bg-slate-900'>
      <h2 className='font-bold'>{title}</h2>
    </div>
  );
}
