import { Category } from '@src/utils/types';

export const family = [
  {
    main: {
      spelling: 'мама',
      soundsLike: 'MAMA',
      meaning: ['mom'],
    },
    categories: [Category.Family],
  },
  {
    main: {
      spelling: 'папа',
      soundsLike: 'PAPA',
      meaning: ['dad'],
    },
    categories: [Category.Family],
  },
  {
    main: {
      spelling: 'брат',
      soundsLike: 'BRAT',
      meaning: ['brother'],
    },
    categories: [Category.Family],
  },
  {
    main: {
      spelling: 'сестра',
      soundsLike: 'SESTRA',
      meaning: ['sister'],
    },
    plural: {
      spelling: 'сёстры',
      soundsLike: 'SIYOSTRI',
      meaning: ['sisters'],
    },
    categories: [Category.Family],
  },
];
