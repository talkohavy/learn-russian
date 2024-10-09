import type { LazyExoticComponent, ReactNode } from 'react';

export type Route = {
  to: string;
  text: string;
  activeNames: Array<string>;
  Component: (() => JSX.Element) | LazyExoticComponent<() => ReactNode>;
  hideFromSidebar?: boolean;
};

export type Word = {
  id?: number;
  spelling: string;
  meaning: Array<string>;
  soundsLike: string;
  singularForeignKey?: string;
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
  Other = 'other',
}
