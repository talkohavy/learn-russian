import { useState } from 'react';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import { indexDBClient } from '@src/main';

export default function AddWordPage() {
  const [spelling, setSpelling] = useState('');
  const [meaning, setMeaning] = useState<string>('');
  const [soundsLike, setSoundsLike] = useState<string>('');
  const [pluralForeignKey, setPluralForeignKey] = useState<string>('');
  const [singularForeignKey, setSingularForeignKey] = useState<string>('');
  const [categories, setCategories] = useState<string>('');

  const isDisabled = !(spelling && meaning && soundsLike && categories);

  const handleAddNewWordClick = async () => {
    const newWord = {
      spelling,
      meaning,
      soundsLike,
      pluralForeignKey,
      singularForeignKey,
      categories,
    };

    const isWordAlreadyExists = (await indexDBClient.getWords({ spelling })).length;

    if (isWordAlreadyExists) return console.error('WORD ALREADY EXISTS!');

    await indexDBClient.create(newWord);
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

      <Button content='Add new word' disabled={isDisabled} onClick={handleAddNewWordClick} />
    </div>
  );
}
