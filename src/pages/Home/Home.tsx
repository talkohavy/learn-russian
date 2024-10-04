import Card from '@src/components/Card';
import { Category } from '@src/utils/types';
import { useMemo } from 'react';

export default function HomePage() {
  const categories = useMemo(() => {
    const keys = Object.keys(Category);

    keys.forEach((key, index) => {
      console.log(`${key} has index ${index}`);
    });

    return keys;
  }, []);

  return (
    <div className='size-full p-6'>
      <div className='flex flex-wrap gap-3 justify-start'>
        {categories.map((categoryName) => (
          <Card key={categoryName} title={categoryName} />
        ))}
      </div>
    </div>
  );
}
