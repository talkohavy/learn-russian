import { useEffect, useState } from 'react';
import Button from '@src/components/Button';
import DisappearingMessage from '@src/components/DisappearingMessage';
import Input from '@src/components/Input';
import NumberInput from '@src/components/NumberInput';
import Select from '@src/components/Select';
import { indexDBClient } from '@src/main';
import type { Category, Word } from '@src/utils/types';

const defaultOption = { value: -1, label: '---', word: {} as Word };

export default function EditWordPage() {
  const [savedValue, setSavedValue] = useState<number | null>(null);
  const [selectedWord, setSelectedWord] = useState(() => defaultOption);
  const [wordOptions, setWordOptions] = useState<Array<{ value: number | string; label: string; word: Word }>>([]);
  const [spelling, setSpelling] = useState('');
  const [meaning, setMeaning] = useState<string>('');
  const [soundsLike, setSoundsLike] = useState<string>('');
  const [pluralForeignKey, setPluralForeignKey] = useState<string>('');
  const [singularForeignKey, setSingularForeignKey] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [categories, setCategories] = useState<string>('');

  useEffect(() => {
    if (selectedWord.value === -1) return;

    setSpelling(selectedWord.word.spelling);
    setSoundsLike(selectedWord.word.soundsLike);
    setMeaning(selectedWord.word.meaning.join(', '));
    setPluralForeignKey(selectedWord.word.pluralForeignKey ?? '');
    setSingularForeignKey(selectedWord.word.singularForeignKey ?? '');
    setPoints(selectedWord.word.points);
    setCategories(selectedWord.word.categories.join(', '));
  }, [selectedWord]);

  useEffect(() => {
    async function fetchWordOptions() {
      const allWords = (await indexDBClient.readAll()) as Array<Word>;

      const allWordSorted = allWords.sort((a, b) => a.meaning[0]!.localeCompare(b.meaning[0]!));

      const wordOptions = allWordSorted.map((word, index) => ({ value: index, label: word.meaning[0]!, word }));
      wordOptions.unshift(defaultOption);

      setWordOptions(wordOptions);
    }

    fetchWordOptions();
  }, []);

  const isDisabled = !(spelling && meaning && soundsLike && categories && selectedWord.value > -1);

  const handleEditWordClick = async () => {
    const updatedWord: Word = {
      ...selectedWord.word,
      spelling,
      meaning: meaning.split(',').map((word) => word.trim()),
      soundsLike,
      pluralForeignKey,
      singularForeignKey,
      points,
      categories: categories.split(',').map((word) => word.trim()) as Array<Category>,
    };

    await indexDBClient.update(updatedWord.id!, updatedWord);

    setSavedValue(Math.floor(Math.random() * 1000));
  };

  return (
    <div className='flex size-full flex-col items-center justify-center gap-10 p-6'>
      <h2 className='text-xl font-bold'>Edit Word</h2>

      <Select selectedOption={selectedWord} setOption={setSelectedWord} options={wordOptions} />

      <div className='flex flex-col items-start justify-start gap-6 overflow-auto'>
        <div>
          <div>Spelling:</div>
          <Input value={spelling} setValue={setSpelling} />
        </div>

        <div>
          <div>Meaning:</div>
          <Input value={meaning} setValue={setMeaning} />
        </div>

        <div>
          <div>Sounds Like:</div>
          <Input value={soundsLike} setValue={setSoundsLike} />
        </div>

        <div>
          <div>Plural Foreign Key:</div>
          <Input value={pluralForeignKey} setValue={setPluralForeignKey} />
        </div>

        <div>
          <div>Singular Foreign Key:</div>
          <Input value={singularForeignKey} setValue={setSingularForeignKey} />
        </div>

        <div>
          <div>Points:</div>
          <NumberInput value={points} setValue={setPoints} />
        </div>

        <div>
          <div>Categories:</div>
          <Input value={categories} setValue={setCategories} />
        </div>
      </div>

      <DisappearingMessage value={savedValue} className='flex items-center justify-center'>
        <div className='h-full text-lg text-green-400'>Word edited successfully!</div>
      </DisappearingMessage>

      <Button content='Edit word' disabled={isDisabled} onClick={handleEditWordClick} />
    </div>
  );
}
