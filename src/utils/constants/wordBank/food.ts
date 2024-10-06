import { Category, type Word } from '@src/utils/types';

export const food: Array<Word> = [
  {
    main: {
      spelling: 'яблоко',
      soundsLike: '**YA**BLAKA',
      meaning: ['apple'],
    },
    plural: {
      spelling: 'яблоки',
      soundsLike: '**YA**BLAKI',
      meaning: ['apples'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'яйцо',
      soundsLike: '*YA**ICHO',
      meaning: ['egg'],
    },
    plural: {
      spelling: 'яйца',
      soundsLike: '**YA**ICHA',
      meaning: ['eggs'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'пицца',
      soundsLike: 'PICHA',
      meaning: ['pizza'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'хлеб',
      soundsLike: 'HLEB',
      meaning: ['bread'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'банан',
      soundsLike: 'BANAN',
      meaning: ['banana'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'мясо',
      soundsLike: 'MI**YA**SA',
      meaning: ['meat'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'суп',
      soundsLike: 'SUP',
      meaning: ['soup'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'молоко',
      soundsLike: 'MALA**KO**',
      meaning: ['milk'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'сыр',
      soundsLike: 'SIER',
      meaning: ['cheese'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'бекон',
      soundsLike: 'BICON',
      meaning: ['bacon'],
    },
    points: 0,
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'салат',
      soundsLike: 'SALAT',
      meaning: ['salad'],
    },
    points: 0,
    categories: [Category.Food],
  },
  // {
  //   main: {
  //     spelling: '',
  //     soundsLike: '',
  //     meaning: [''],
  //   },
  //   categories: [Category.Food],
  // },
];
