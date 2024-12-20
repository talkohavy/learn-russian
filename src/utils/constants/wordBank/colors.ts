import { Category, type Word } from '@src/utils/types';

export const colors: Array<Word> = [
  {
    spelling: 'красный',
    soundsLike: '**KRA**SNII',
    meaning: ['red'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'синий',
    soundsLike: '**SI**NI',
    meaning: ['blue'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'жёлтый',
    soundsLike: '**ZHYO**LTI',
    meaning: ['yellow'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'зелёный',
    soundsLike: '**ZI**LYONI',
    meaning: ['green'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'розовый',
    soundsLike: '**RO**ZAVI',
    meaning: ['pink'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'фиолетовый',
    soundsLike: 'PHIA**LYE**TOVI',
    meaning: ['purple'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'коричневый',
    soundsLike: 'KA**RI**CHNYEVI',
    meaning: ['brown'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'серый',
    soundsLike: '**SYE**RUI',
    meaning: ['gray'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'голубой',
    soundsLike: 'GALU**BOY**',
    meaning: ['cyan'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'оранжевый',
    soundsLike: 'O**RA**NZHEVYY',
    meaning: ['orange'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'чёрный',
    soundsLike: '**CHO**RNI',
    meaning: ['black'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'белый',
    soundsLike: '**BYE**LI',
    meaning: ['white'],
    points: 0,
    categories: [Category.Colors],
  },
  {
    spelling: 'цвет',
    soundsLike: 'TSVET',
    meaning: ['color'],
    points: 0,
    categories: [Category.Colors],
    pluralForeignKey: 'цвета',
  },
  {
    spelling: 'цвета',
    soundsLike: 'TSVE**TA**',
    meaning: ['colors'],
    points: 0,
    categories: [Category.Colors],
    singularForeignKey: 'цвет',
  },
];
