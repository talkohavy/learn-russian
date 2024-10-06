import { useMemo, useState } from 'react';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Retry from '@src/components/svgs/Retry';
import VInCircle from '@src/components/svgs/VInCircle';
import XMark from '@src/components/svgs/XMark';
import { allWords } from '@src/utils/constants/wordBank';
import { SelectionStrategies, selectKWords } from './logic/selectKWords';

const wordsInTestCount = 10;
const emptyAnswers = Array.from(Array(wordsInTestCount)).map(() => '');

export default function TestPage() {
  const [showResults, setShowResults] = useState<boolean>();
  const [shuffleValue, setShuffleValue] = useState<number>(0);

  const randomWords = useMemo(
    () => selectKWords({ data: allWords, strategy: SelectionStrategies.Knowledge, wordCount: wordsInTestCount }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shuffleValue],
  );

  const [answers, setAnswers] = useState<Array<string>>(() => emptyAnswers);

  const handleTestClick = () => setShowResults(true);

  const handleNextTestClick = () => {
    setAnswers(emptyAnswers);
    setShowResults(false);
    setShuffleValue((prev) => prev + (1 % 3));
  };

  const handleRetryTestClick = () => {
    setAnswers(emptyAnswers);
    setShowResults(false);
  };

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

      <div className='flex w-full max-w-md items-center justify-between gap-4'>
        <Button content='Check' onClick={handleTestClick} className='h-10 w-24' />

        <Button
          content='retry'
          onClick={handleRetryTestClick}
          className='flex flex-col-reverse items-center justify-center gap-1 bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800'
        >
          <Retry className='size-4' />
        </Button>

        <Button
          content='Next'
          onClick={handleNextTestClick}
          className='h-10 w-24 bg-green-600 hover:bg-green-700 active:bg-green-800'
        />
      </div>
    </div>
  );
}
