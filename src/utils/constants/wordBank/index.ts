import { animals } from './animals';
import { bodyRelation } from './bodyRelation';
import { colors } from './colors';
import { countries } from './countries';
import { drinks } from './drinks';
import { food } from './food';
import { greetings } from './greetings';
import { jobs } from './jobs';
import { other } from './other';
import { questionWord } from './questionWord';

export const allWords = [
  ...animals,
  ...food,
  ...drinks,
  ...colors,
  ...greetings,
  ...jobs,
  ...bodyRelation,
  ...questionWord,
  ...countries,
  ...other,
];
