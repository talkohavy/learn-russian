import { Category, type Word } from '@src/utils/types';

export const verbs: Array<Word> = [
  {
    spelling: 'знать',
    soundsLike: 'ZNAT',
    meaning: ['to know'],
    points: 0,
    categories: [Category.Verbs],
  },
  {
    spelling: 'жить',
    soundsLike: 'ZHIT',
    meaning: ['to live'],
    points: 0,
    categories: [Category.Verbs],
  },
  {
    spelling: 'лубить',
    soundsLike: 'LUBIT',
    meaning: ['to love'],
    points: 0,
    categories: [Category.Verbs],
  },
  {
    spelling: 'любить',
    soundsLike: 'LUBIT',
    meaning: ['to love', 'to like'],
    points: 0,
    categories: [Category.Verbs],
    verb: {
      toVerb: 'любить',
      theAction: 'любящий',
      past: {
        masculine: 'губил',
        feminine: 'губила',
        plural: 'губили',
      },
      present: {
        ya: 'гублю',
        ti: 'губишь',
        on: 'губит',
        ona: 'губит',
        mi: 'губим',
        vi: 'губите',
        oni: 'губят',
      },
      future: {
        ya: 'буду губить',
        ti: 'будешь губить',
        on: 'будет губить',
        ona: 'будет губить',
        mi: 'будем губить',
        vi: 'будете губить',
        oni: 'будут губить',
      },
    },
  },
  {
    spelling: 'работать',
    soundsLike: 'RABOTET',
    meaning: ['to work'],
    points: 0,
    categories: [Category.Verbs],
  },
];
