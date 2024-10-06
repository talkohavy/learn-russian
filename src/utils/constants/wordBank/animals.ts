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
    points: 0,
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
    points: 0,
    categories: [Category.Animals],
  },
  {
    main: {
      spelling: 'сабака',
      soundsLike: 'SA**BA**KA',
      meaning: ['dog'],
    },
    points: 0,
    categories: [Category.Animals],
  },
  {
    main: {
      spelling: 'орёл',
      soundsLike: 'AR**YOL**',
      meaning: ['eagle'],
    },
    points: 0,
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
