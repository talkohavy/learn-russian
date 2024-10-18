import { Category, type Word } from '@src/utils/types';

export const jobs: Array<Word> = [
  {
    spelling: 'актёр',
    soundsLike: 'AKTIOR',
    meaning: ['actor'],
    pluralForeignKey: 'актёры',
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'актёры',
    soundsLike: 'AKTYORI',
    meaning: ['actors'],
    singularForeignKey: 'актёр',
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'тренер',
    soundsLike: '**TRAI**NER',
    meaning: ['coach'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'капитан',
    soundsLike: '**KA**PITAN',
    meaning: ['captain'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'повар',
    soundsLike: '**PO**VAR',
    meaning: ['cook'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'доктор',
    soundsLike: '**DOK**TOR',
    meaning: ['doctor'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'инженер',
    soundsLike: '**EN**ZHINIR',
    meaning: ['engineer'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'учитель',
    soundsLike: "U**CH'I**TYEL",
    meaning: ['teacher'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'психолог',
    soundsLike: 'PSI**HO**LOG',
    meaning: ['psychologist'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'политик',
    soundsLike: 'PA**LI**TIC',
    meaning: ['politician'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'музыкант',
    soundsLike: 'MOOZI**KANT**',
    meaning: ['musician'],
    points: 0,
    categories: [Category.Jobs],
  },
  {
    spelling: 'пилот',
    soundsLike: 'PI**LOT**',
    meaning: ['pilot'],
    points: 0,
    categories: [Category.Jobs],
  },
];