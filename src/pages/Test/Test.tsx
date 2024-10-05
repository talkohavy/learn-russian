import { useMemo, useState } from 'react';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import VInCircle from '@src/components/svgs/VInCircle';
import XMark from '@src/components/svgs/XMark';
import { allWords } from '@src/utils/constants/wordBank';
import { getRandomObjects } from '@src/utils/getRandomObjects';
import type { Word } from '@src/utils/types';

export default function TestPage() {
  const [showResults, setShowResults] = useState<boolean>();
  const [shuffleValue, setShuffleValue] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const randomWords = useMemo(() => getRandomObjects<Word>(allWords), [shuffleValue]);

  const [answers, setAnswers] = useState<Array<string>>(() => Array.from(Array(randomWords.length)).map(() => ''));

  const handleTestClick = () => setShowResults(true);
  const handleNextTestClick = () => setShuffleValue((prev) => prev + (1 % 3));

  return (
    <div className='flex size-full flex-col items-center justify-center gap-10 p-6'>
      <div className='flex w-full max-w-md flex-col gap-3 rounded-md border p-4'>
        {randomWords.map(({ main }, index) => {
          const isCorrectAnswer = main.spelling === answers[index];

          return (
            <div key={index} className='flex h-10 w-full items-center justify-between gap-10'>
              <div>{main.meaning[0]}</div>

              <div className='flex h-full items-center gap-2'>
                <Input
                  value={answers[index]!}
                  setValue={(value) => setAnswers((prevAnswers) => prevAnswers.with(index, value))}
                  className='!w-52'
                />

                <div className='h-full w-12'>
                  {showResults && (
                    <div className='flex h-full items-center justify-center'>
                      {isCorrectAnswer ? (
                        <VInCircle className='h-1/2' borderColor='#19d23a' color='#19d23a' />
                      ) : (
                        <XMark className='h-1/2 stroke-red-500' />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex items-center justify-center gap-4'>
        <Button content='Check' onClick={handleTestClick} />

        <Button
          content='Next'
          onClick={handleNextTestClick}
          className='bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800'
        />
      </div>
    </div>
  );
}
