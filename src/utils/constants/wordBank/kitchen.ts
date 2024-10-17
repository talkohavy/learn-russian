import { Category, type Word } from '@src/utils/types';

export const kitchen: Array<Word> = [
  {
    spelling: 'вилка',
    soundsLike: '**VI**LKA',
    meaning: ['fork'],
    pluralForeignKey: 'вилки',
    singularForeignKey: '',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'вилки',
    soundsLike: '**VI**LKI',
    meaning: ['forks'],
    pluralForeignKey: '',
    singularForeignKey: 'вилка',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'нож',
    soundsLike: 'NOZH',
    meaning: ['knife'],
    pluralForeignKey: 'ножи',
    singularForeignKey: '',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'ножи',
    soundsLike: 'NOZHI',
    meaning: ['knives'],
    pluralForeignKey: '',
    singularForeignKey: 'нож',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'тарелка',
    soundsLike: 'TAREILKA',
    meaning: ['plate'],
    pluralForeignKey: 'тарелки',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'тарелки',
    soundsLike: 'TAREILKI',
    meaning: ['plates'],
    singularForeignKey: 'тарелка',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'чашка',
    soundsLike: '**CHA**SHKA',
    meaning: ['cup'],
    pluralForeignKey: 'чашки',
    singularForeignKey: '',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'чашки',
    soundsLike: '**CHA**SHKI',
    meaning: ['cups'],
    pluralForeignKey: '',
    singularForeignKey: 'чашка',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'ложка',
    soundsLike: '**LO**ZHKA',
    meaning: ['big spoon'],
    pluralForeignKey: 'ложки',
    singularForeignKey: '',
    points: 0,
    categories: [Category.Kitchen],
  },
  {
    spelling: 'ложки',
    soundsLike: '**LO**ZHKI',
    meaning: ['big spoons'],
    pluralForeignKey: 'ложка',
    singularForeignKey: '',
    points: 0,
    categories: [Category.Kitchen],
  },
  // {
  //   spelling: '',
  //   soundsLike: '',
  //   meaning: [''],
  //   pluralForeignKey: '',
  //   singularForeignKey: '',
  //   points: 0,
  //   categories: [Category.Kitchen],
  // },
];

// {
//   spelling: 'ложечка',
//   soundsLike: '**LO**ZHICHKA',
//   meaning: ['small spoon'],
//   pluralForeignKey: '',
//   singularForeignKey: '',
//   points: 0,
//   categories: [Category.Kitchen],
// },