import { useMemo, useState } from 'react';
import Button from '@src/components/Button/Button';
import Input from '@src/components/Input';
import { allWords } from '@src/utils/constants/wordBank';
import { getRandomObjects } from '@src/utils/getRandomObjects';
import type { Word } from '@src/utils/types';

export default function TestPage() {
  const randomWords = useMemo(() => getRandomObjects<Word>(allWords), []);

  const [answers, setAnswers] = useState<Array<string>>(() => Array.from(Array(randomWords.length).map(() => '')));

  console.log('answers is:', answers);

  const userInputs: any = {};

  const handleTestClick = () => {
    const answers = randomWords.map((word) => {
      const isCorrectAnswer = word.main.meaning === userInputs[word.main.spelling];

      return isCorrectAnswer;
    });

    console.log('answers is:', answers);
  };

  return (
    <div className='flex size-full flex-col items-center justify-center gap-10 p-6'>
      <div className='flex w-full max-w-md flex-col gap-3 border'>
        {randomWords.map(({ main }, index) => {
          const isCorrectAnswer = main.spelling === answers[index];

          return (
            <div key={index} className='flex w-full items-center justify-between gap-10'>
              <div>{main.meaning}</div>

              <div className='flex items-center gap-2'>
                <Input
                  value={answers[index]!}
                  setValue={(value) => setAnswers((prevAnswers) => prevAnswers.with(index, value))}
                  className='!w-52'
                />

                <div className='w-12'>{isCorrectAnswer ? 'yes' : 'no'}</div>
              </div>
            </div>
          );
        })}
      </div>

      <Button content='Test' onClick={handleTestClick} />
    </div>
  );
}
