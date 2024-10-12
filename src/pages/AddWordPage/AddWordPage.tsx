import { useCallback, useState } from 'react';
import Button from '@src/components/Button';
import DisappearingMessage from '@src/components/DisappearingMessage';
import Input from '@src/components/Input';
import { indexDBClient } from '@src/main';

export default function AddWordPage() {
  const [savedValue, setSavedValue] = useState<number | null>(null);
  const [spelling, setSpelling] = useState('');
  const [meaning, setMeaning] = useState<string>('');
  const [soundsLike, setSoundsLike] = useState<string>('');
  const [pluralForeignKey, setPluralForeignKey] = useState<string>('');
  const [singularForeignKey, setSingularForeignKey] = useState<string>('');
  const [categories, setCategories] = useState<string>('');

  const isDisabled = !(spelling && meaning && soundsLike && categories);

  const resetFields = useCallback(() => {
    setSpelling('');
    setMeaning('');
    setSoundsLike('');
    setPluralForeignKey('');
    setSingularForeignKey('');
    setCategories('');
  }, [setSpelling, setMeaning, setSoundsLike, setPluralForeignKey, setSingularForeignKey, setCategories]);

  const handleAddNewWordClick = async () => {
    const meaningArr = meaning.split(',').map((item) => item.trim());
    const categoriesArr = categories.split(',').map((item) => item.trim());

    const newWord = {
      spelling,
      meaning: meaningArr,
      soundsLike,
      pluralForeignKey,
      singularForeignKey,
      categories: categoriesArr,
    };

    const isWordAlreadyExists = (await indexDBClient.getWords({ spelling })).length;

    if (isWordAlreadyExists) return console.error('WORD ALREADY EXISTS!');

    await indexDBClient.create(newWord);

    resetFields();

    setSavedValue(Math.floor(Math.random() * 1000));
  };

  return (
    <div className='flex size-full flex-col items-center justify-center gap-10 p-6'>
      <h2 className='text-xl font-bold'>Add New Word</h2>

      <div className='flex flex-col items-start justify-start gap-6'>
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
          <div>Categories:</div>
          <Input value={categories} setValue={setCategories} />
        </div>
      </div>

      <DisappearingMessage value={savedValue} className='flex items-center justify-center'>
        <div className='h-full text-lg text-green-400'>Word added successfully!</div>
      </DisappearingMessage>

      <Button content='Add new word' disabled={isDisabled} onClick={handleAddNewWordClick} />
    </div>
  );
}
