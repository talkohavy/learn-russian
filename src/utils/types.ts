import type { LazyExoticComponent, ReactNode } from 'react';

export type Route = {
  to: string;
  text: string;
  activeNames: Array<string>;
  Component: (() => JSX.Element) | LazyExoticComponent<() => ReactNode>;
  hideFromSidebar?: boolean;
};

type VerbBodies = {
  ya: string;
  ti: string;
  on: string;
  ona: string;
  mi: string;
  vi: string;
  oni: string;
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
  verb?: {
    toVerb: string;
    theAction: string;
    past: {
      masculine: string;
      feminine: string;
      plural: string;
    };
    present: VerbBodies;
    future: VerbBodies;
  };
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
