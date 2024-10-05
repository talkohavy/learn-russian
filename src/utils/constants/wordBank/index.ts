import { animals } from './animals';
import { bodyRelation } from './bodyRelation';
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
  ...greetings,
  ...jobs,
  ...bodyRelation,
  ...questionWord,
  ...countries,
  ...other,
];
