import { Category, type Word } from '@src/utils/types';

export const food: Array<Word> = [
  {
    main: {
      spelling: 'яблокo',
      soundsLike: '**YA**BLAKA',
      meaning: ['apple'],
    },
    plural: {
      spelling: 'яблоки',
      soundsLike: '**YA**BLAKI',
      meaning: ['appleс'],
    },
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
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'пицца',
      soundsLike: 'PICHA',
      meaning: ['pizza'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'хлеб',
      soundsLike: 'HLEB',
      meaning: ['bread'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'банан',
      soundsLike: 'BANAN',
      meaning: ['banana'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'мясо',
      soundsLike: 'MI**YA**SA',
      meaning: ['meat'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'суп',
      soundsLike: 'SUP',
      meaning: ['soup'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'молоко',
      soundsLike: 'MALA**KO**',
      meaning: ['milk'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'сыр',
      soundsLike: 'SIER',
      meaning: ['cheese'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'бекон',
      soundsLike: 'BICON',
      meaning: ['bacon'],
    },
    categories: [Category.Food],
  },
  {
    main: {
      spelling: 'салат',
      soundsLike: 'SALAT',
      meaning: ['salad'],
    },
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
