import { Category, type Word } from '@src/utils/types';

export const singularAnimals: Array<Word> = [
  {
    spelling: 'лошадь',
    soundsLike: '**LO**SHED',
    meaning: ['horse'],
    pluralForeignKey: 'лошади',
    points: 0,
    categories: [Category.Animals],
  },
  {
    spelling: 'кошка',
    soundsLike: '**KO**SHKA',
    meaning: ['cat'],
    pluralForeignKey: 'кошки',
    points: 0,
    categories: [Category.Animals],
  },
  {
    spelling: 'собака',
    soundsLike: 'SA**BA**KA',
    meaning: ['dog'],
    // pluralForeignKey: '',
    points: 0,
    categories: [Category.Animals],
  },
  {
    spelling: 'орёл',
    soundsLike: 'AR**YOL**',
    meaning: ['eagle'],
    // pluralForeignKey: '',
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

export const pluralAnimals: Array<Word> = [
  {
    spelling: 'лошади',
    soundsLike: '**LO**SHEDI',
    meaning: ['horses'],
    singularForeignKey: 'лошадь',
    points: 0,
    categories: [Category.Animals],
  },
  {
    spelling: 'кошки',
    soundsLike: '**KO**SHKI',
    meaning: ['cats'],
    singularForeignKey: 'кошка',
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

export const animals = [...singularAnimals, ...pluralAnimals];
