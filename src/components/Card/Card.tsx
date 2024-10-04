type CardProps = {
  title: string;
};

export default function Card(props: CardProps) {
  const { title } = props;

  return (
    <div className='flex justify-center items-center bg-red-50 rounded-md size-40 hover:bg-red-100 cursor-pointer active:bg-red-200'>
      <h2 className='font-bold'>{title}</h2>
    </div>
  );
}
