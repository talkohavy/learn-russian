import { useMemo, useState } from 'react';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Retry from '@src/components/svgs/Retry';
import VInCircle from '@src/components/svgs/VInCircle';
import XMark from '@src/components/svgs/XMark';
import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { allWords } from '@src/utils/constants/wordBank';
import { SelectionStrategies, selectKWords } from './logic/selectKWords';

type WordScore = {
  word: string;
  score: number;
};

const wordsInTestCount = 10;
const emptyAnswers = Array.from(Array(wordsInTestCount)).map(() => '');

export default function TestPage() {
  const [showResults, setShowResults] = useState<boolean>();
  const [shuffleValue, setShuffleValue] = useState<number>(0);

  const [wordsScore, setWordsScore] = useLocalStorage<Array<WordScore>>(
    'words',
    allWords.map((w) => ({ word: w.spelling, score: 0 })),
  );

  wordsScore;

  const randomWords = useMemo(
    () => selectKWords({ data: allWords, strategy: SelectionStrategies.Knowledge, wordCount: wordsInTestCount }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shuffleValue],
  );

  const [answers, setAnswers] = useState<Array<string>>(() => emptyAnswers);

  const handleCheckClick = () => {
    setShowResults(true);

    randomWords.forEach(({ spelling }, index) => {
      const isCorrectAnswer = spelling === answers[index];

      if (isCorrectAnswer) {
        const updatedWordScoresArr = wordsScore.map((wordScore) => {
          if (wordScore.word === spelling) {
            const updatedWordScore: WordScore = { word: wordScore.word, score: wordScore.score + 1 };
            return updatedWordScore;
          }

          return wordScore;
        });

        setWordsScore(updatedWordScoresArr);
      }
    });
  };

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
        {randomWords.map(({ spelling, meaning }, index) => {
          const isCorrectAnswer = spelling === answers[index];

          return (
            <div key={index} className='flex h-10 w-full items-center justify-between gap-10'>
              <div>{meaning[0]}</div>

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
        <Button content='Check' onClick={handleCheckClick} className='h-10 w-24' />

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
