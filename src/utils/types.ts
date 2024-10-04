export enum Category {
  Animals = 'animals',
  Jobs = 'jobs',
  Food = 'food',
  Colors = 'colors',
  BodyParts = 'body-parts',
  BodyRelation = 'body-relation',
  MusicalInstrument = 'musical-instrument',
  Verbs = 'verbs',
  Belonging = 'belonging',
  Family = 'family',
  QuestionWord = 'question-word',
  Countries = 'countries',
  Greetings = 'greetings',
  Other = 'other',
}

type WordMeta = {
  spelling: string;
  meaning: Array<string>;
  soundsLike: string;
};

export type Word = {
  main: WordMeta;
  male?: WordMeta;
  female?: WordMeta;
  plural?: WordMeta;
  categories: Array<Category>;
};
