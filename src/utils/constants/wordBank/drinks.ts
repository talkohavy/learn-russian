import { Category } from '@src/utils/types';

export const drinks = [
  {
    main: {
      spelling: 'чай',
      soundsLike: 'CHAI',
      meaning: ['tea'],
    },
    points: 0,
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'кофе',
      soundsLike: '**KO**FИ',
      meaning: ['coffee'],
    },
    points: 0,
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'сок',
      soundsLike: 'SOK',
      meaning: ['juice'],
    },
    points: 0,
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'вино',
      soundsLike: 'VI**NO**',
      meaning: ['wine'],
    },
    points: 0,
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'вода',
      soundsLike: 'VADA',
      meaning: ['water'],
    },
    points: 0,
    categories: [Category.Drinks, Category.Other],
  },
];
