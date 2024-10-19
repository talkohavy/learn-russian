import { Category, type Word } from '@src/utils/types';

export const family: Array<Word> = [
  {
    spelling: 'семья',
    soundsLike: 'SYEMYA',
    meaning: ['family'],
    points: 0,
    categories: [Category.Family],
  },
  {
    spelling: 'мама',
    soundsLike: 'MAMA',
    meaning: ['mom'],
    points: 0,
    categories: [Category.Family],
  },
  {
    spelling: 'папа',
    soundsLike: 'PAPA',
    meaning: ['dad'],
    points: 0,
    categories: [Category.Family],
  },
  {
    spelling: 'брат',
    soundsLike: 'BRAT',
    meaning: ['brother'],
    points: 0,
    categories: [Category.Family],
  },
  {
    spelling: 'сестра',
    soundsLike: 'SESTRA',
    meaning: ['sister'],
    pluralForeignKey: 'сёстры',
    points: 0,
    categories: [Category.Family],
  },
  {
    spelling: 'сёстры',
    soundsLike: 'SIYOSTRI',
    meaning: ['sisters'],
    singularForeignKey: 'сестра',
    points: 0,
    categories: [Category.Family],
  },
];
