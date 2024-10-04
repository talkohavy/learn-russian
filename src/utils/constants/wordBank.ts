import { Category, type Word } from '../types';

export const allWords: Array<Word> = [
  {
    main: {
      spelling: 'актёр',
      soundsLike: 'AKTIOR',
      meaning: ['actor'],
    },
    plural: {
      spelling: 'актёры',
      soundsLike: 'AKTYORI',
      meaning: ['actors'],
    },
    categories: [Category.Jobs],
  },
  {
    main: {
      spelling: 'тренер',
      soundsLike: '**TRAI**NER',
      meaning: ['coach'],
    },
    categories: [Category.Jobs],
  },
  {
    main: {
      spelling: 'капитан',
      soundsLike: '**KA**PITAN',
      meaning: ['captain'],
    },
    categories: [Category.Jobs],
  },
];
