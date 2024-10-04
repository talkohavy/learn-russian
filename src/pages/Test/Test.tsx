import { allWords } from '@src/utils/constants/wordBank';
import { getRandomObjects } from '@src/utils/getRandomObjects';
import { Word } from '@src/utils/types';

import { useMemo } from 'react';

export default function TestPage() {
  const randomWords = useMemo(() => {
    return getRandomObjects<Word>(allWords);
  }, []);

  return (
    <div className='size-full p-6'>
      {randomWords.map(({ main }) => (
        <div>{main.spelling}</div>
      ))}
    </div>
  );
}
