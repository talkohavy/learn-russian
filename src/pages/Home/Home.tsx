import { useMemo, useRef } from 'react';
import clsx from 'clsx';
import Card from '@src/components/Card';
import { useWidthHeightResize } from '@src/hooks/useWidthHeightResize';
import { Category } from '@src/utils/types';

enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

function getObjectSize(width: number) {
  if (width < 600) return Sizes.Small;
  if (width < 1080) return Sizes.Medium;

  return Sizes.Large;
}

export default function HomePage() {
  const categories = useMemo(() => {
    const keys = Object.keys(Category);

    return keys;
  }, []);

  const elementToWatch = useRef(null);

  const { width } = useWidthHeightResize({ wrapperRef: elementToWatch, ms: 200 });

  const objectSize = getObjectSize(width);

  return (
    <div className='size-full overflow-auto p-6'>
      <div
        className={clsx(
          'grid auto-rows-[200px] gap-x-5 gap-y-4',
          objectSize === Sizes.Small && 'grid-cols-1',
          objectSize === Sizes.Medium && 'grid-cols-2',
          objectSize === Sizes.Large && 'grid-cols-4',
        )}
        ref={elementToWatch}
      >
        {!!width && categories.map((categoryName) => <Card key={categoryName} title={categoryName} />)}
      </div>
    </div>
  );
}
