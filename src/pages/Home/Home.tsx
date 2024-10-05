import { useMemo } from 'react';
import Card from '@src/components/Card';
import { Category } from '@src/utils/types';

export default function HomePage() {
  const categories = useMemo(() => {
    const keys = Object.keys(Category);

    return keys;
  }, []);

  return (
    <div className='size-full p-6'>
      <div className='flex flex-wrap justify-start gap-3'>
        {categories.map((categoryName) => (
          <Card key={categoryName} title={categoryName} />
        ))}
      </div>
    </div>
  );
}
