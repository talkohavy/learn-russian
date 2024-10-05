import { Category } from '@src/utils/types';

export const drinks = [
  {
    main: {
      spelling: 'чай',
      soundsLike: 'CHAI',
      meaning: ['tea'],
    },
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'кофе',
      soundsLike: '**KO**FИ',
      meaning: ['coffee'],
    },
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'сок',
      soundsLike: 'SOK',
      meaning: ['juice'],
    },
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'вино',
      soundsLike: 'VI**NO**',
      meaning: ['wine'],
    },
    categories: [Category.Drinks],
  },
  {
    main: {
      spelling: 'вода',
      soundsLike: 'VADA',
      meaning: ['water'],
    },
    categories: [Category.Drinks, Category.Other],
  },
];
