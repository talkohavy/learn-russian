import { useEffect, useMemo, useState } from 'react';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import Select from '@src/components/Select';
import Retry from '@src/components/svgs/Retry';
import VInCircle from '@src/components/svgs/VInCircle';
import XMark from '@src/components/svgs/XMark';
import { indexDBClient } from '@src/main';
import { MAX_WEIGHT } from '@src/utils/constants';
import { SelectionStrategies, selectKWords } from '@src/utils/selectKWords';
import { Category, type Word } from '@src/utils/types';

const ALL_WORDS = '---' as Category;
const wordsInTestCount = 10;
const emptyAnswers = Array.from(Array(wordsInTestCount)).map(() => '');

const categoryOptions = Object.entries(Category).map(([categoryName, categoryValue]) => ({
  value: categoryValue,
  label: categoryName,
}));
categoryOptions.unshift({ value: ALL_WORDS, label: '---' });

export default function TestPage() {
  const [allWords, setAllWords] = useState<Array<Word>>([]);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(categoryOptions[0]!);
  const [showResults, setShowResults] = useState<boolean>();

  const [wordsWithUpdatedScore, setWordsWithUpdatedScore] = useState<Array<Word>>([]);

  const randomWords = useMemo(
    () => {
      const wordsToChooseFrom =
        selectedCategoryOption.value === ALL_WORDS
          ? allWords
          : allWords.filter((word) => word.categories.includes(selectedCategoryOption.value));

      return selectKWords({
        data: wordsToChooseFrom,
        strategy: SelectionStrategies.Knowledge,
        wordCount: wordsInTestCount,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allWords, selectedCategoryOption],
  );

  const [answers, setAnswers] = useState<Array<string>>(() => emptyAnswers);

  const handleCheckClick = () => {
    setShowResults(true);

    const wordsToUpdateArr: Array<Word> = [];

    randomWords.forEach((randomWord, index) => {
      const { id, spelling } = randomWord;

      const isCorrectAnswer = spelling === answers[index];

      if (!isCorrectAnswer) return;

      const wordWithUpdatedScore: Word = { ...randomWord, points: Math.min(randomWord.points + 1, MAX_WEIGHT) };

      // 1. This is for updating the in memory allWords
      wordsToUpdateArr.push(wordWithUpdatedScore);

      // 2. This is for updating the Database
      // NOTE! The update will only be relevant on page load!
      indexDBClient.update(id!, wordWithUpdatedScore);
    });

    setWordsWithUpdatedScore(wordsToUpdateArr);
  };

  useEffect(() => {
    async function fetchAllWords() {
      const fetchedWords = (await indexDBClient.readAll()) as Array<Word>;

      setAllWords(fetchedWords);
    }

    fetchAllWords();
  }, []);

  const handleNextTestClick = () => {
    setAnswers(emptyAnswers);
    setShowResults(false);

    setAllWords((prevAllWords) =>
      prevAllWords.map((prevWord) => {
        const wordWithUpdatedScore = wordsWithUpdatedScore.find((w) => w.id === prevWord.id);

        return wordWithUpdatedScore ?? prevWord;
      }),
    );
  };

  const handleRetryTestClick = () => {
    setAnswers(emptyAnswers);
    setShowResults(false);
  };

  if (!allWords.length) return null;

  return (
    <div className='flex size-full flex-col items-center justify-center gap-10 p-6'>
      <Select selectedOption={selectedCategoryOption} setOption={setSelectedCategoryOption} options={categoryOptions} />

      <div className='flex w-full max-w-md flex-col gap-3 rounded-md border p-4'>
        {randomWords.map(({ spelling, meaning, soundsLike }, index) => {
          const isCorrectAnswer = spelling === answers[index];

          return (
            <div key={index} className='flex h-10 w-full items-center justify-between gap-10'>
              <div title={soundsLike}>{meaning[0]}</div>

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
                        <VInCircle className='h-1/2' borderColor='#19d23a' color='#19d23a' title={spelling} />
                      ) : (
                        <XMark className='h-1/2 stroke-red-500' title={spelling} />
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
