import { Category, type Word } from '@src/utils/types';

export const animals: Array<Word> = [
  {
    main: {
      spelling: 'лошадь',
      soundsLike: '**LO**SHED',
      meaning: ['horse'],
    },
    plural: {
      spelling: 'лошади',
      soundsLike: '**LO**SHEDI',
      meaning: ['horses'],
    },
    categories: [Category.Animals],
  },
  {
    main: {
      spelling: 'кошка',
      soundsLike: '**KO**SHKA',
      meaning: ['cat'],
    },
    plural: {
      spelling: 'кошки',
      soundsLike: '**KO**SHKI',
      meaning: ['cats'],
    },
    categories: [Category.Animals],
  },
  {
    main: {
      spelling: 'сабака',
      soundsLike: 'SA**BA**KA',
      meaning: ['dog'],
    },
    categories: [Category.Animals],
  },
  {
    main: {
      spelling: 'орёл',
      soundsLike: 'AR**YOL**',
      meaning: ['eagle'],
    },
    categories: [Category.Animals],
  },
  // {
  //   main: {
  //     spelling: '',
  //     soundsLike: '',
  //     meaning: [''],
  //   },
  //   categories: [Category.Animals],
  // },
];
