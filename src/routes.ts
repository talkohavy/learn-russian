import { lazy } from 'react';
import { BASE_URL } from './utils/constants';
import type { Route } from './utils/types';

const TestPage = lazy(() => import('./pages/Test'));
const VerbsTestPage = lazy(() => import('./pages/VerbsTestPage'));
const SentencesTestPage = lazy(() => import('./pages/SentencesTestPage'));
const AddNewWordPage = lazy(() => import('./pages/AddWordPage'));
const EditNewWordPage = lazy(() => import('./pages/EditWordPage'));
const RedirectToHome = lazy(() => import('./pages/RedirectToHome'));

export const routes: Array<Route> = [
  {
    to: '/',
    hideFromSidebar: true,
    Component: RedirectToHome,
  } as Route,
  {
    to: `${BASE_URL}/`,
    text: 'Test me',
    activeNames: ['/', '/test-me'],
    Component: TestPage,
  },
  {
    to: `${BASE_URL}/verbs`,
    text: 'Verbs',
    activeNames: ['/verbs'],
    Component: VerbsTestPage,
  },
  {
    to: `${BASE_URL}/sentences`,
    text: 'Sentences',
    activeNames: ['/sentences'],
    Component: SentencesTestPage,
  },
  {
    to: `${BASE_URL}/add-word`,
    text: 'Add word',
    activeNames: ['/add-word'],
    Component: AddNewWordPage,
  },
  {
    to: `${BASE_URL}/edit-word`,
    text: 'Edit word',
    activeNames: ['/edit-word'],
    Component: EditNewWordPage,
  },
];
