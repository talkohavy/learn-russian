import type { LazyExoticComponent, ReactNode } from 'react';

export type Route = {
  to: string;
  text: string;
  activeNames: Array<string>;
  Component: (() => JSX.Element) | LazyExoticComponent<() => ReactNode>;
  hideFromSidebar?: boolean;
};

type VerbBodies = {
  ya: Word;
  ti: Word;
  on: Word;
  ona: Word;
  mi: Word;
  vi: Word;
  oni: Word;
};

export type FullVerbForm = {
  toVerb: Word;
  theAction: Word;
  past: {
    masculine: Word;
    feminine: Word;
    plural: Word;
  };
  present: VerbBodies;
  future: VerbBodies;
};

export type Word = {
  id?: number;
  spelling: string;
  meaning: Array<string>;
  soundsLike: string;
  singularForeignKey?: string | null;
  pluralForeignKey?: string;
  maleForeignKey?: string;
  femaleForeignKey?: string;
  points: number;
  categories: Array<Category>;
};

export enum Category {
  Animals = 'animals',
  Jobs = 'jobs',
  Food = 'food',
  Drinks = 'drinks',
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
  Kitchen = 'kitchen',
  Sentences = 'sentences',
  Other = 'other',
}
