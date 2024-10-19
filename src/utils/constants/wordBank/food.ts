import { Category, type Word } from '@src/utils/types';

export const food: Array<Word> = [
  {
    spelling: 'еда',
    soundsLike: 'YE**DA**',
    meaning: ['food'],
    points: 0,
    categories: [Category.Other],
  },
  {
    spelling: 'яблоко',
    soundsLike: '**YA**BLAKA',
    meaning: ['apple'],
    pluralForeignKey: 'яблоки',
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'яблоки',
    soundsLike: '**YA**BLAKI',
    meaning: ['apples'],
    singularForeignKey: 'яблоко',
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'яйцо',
    soundsLike: '*YA**ICHO',
    meaning: ['egg'],
    pluralForeignKey: 'яйца',
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'яйца',
    soundsLike: '**YA**ICHA',
    meaning: ['eggs'],
    singularForeignKey: 'яйцо',
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'пицца',
    soundsLike: 'PICHA',
    meaning: ['pizza'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'хлеб',
    soundsLike: 'HLEB',
    meaning: ['bread'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'банан',
    soundsLike: 'BANAN',
    meaning: ['banana'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'мясо',
    soundsLike: 'MI**YA**SA',
    meaning: ['meat'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'суп',
    soundsLike: 'SUP',
    meaning: ['soup'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'молоко',
    soundsLike: 'MALA**KO**',
    meaning: ['milk'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'сыр',
    soundsLike: 'SIER',
    meaning: ['cheese'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'бекон',
    soundsLike: 'BICON',
    meaning: ['bacon'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'салат',
    soundsLike: 'SALAT',
    meaning: ['salad'],
    points: 0,
    categories: [Category.Food],
  },
  {
    spelling: 'шоколад',
    soundsLike: 'SHEKA**LAD**',
    meaning: ['chocolate'],
    points: 0,
    categories: [Category.Food],
  },
];
