import { lazy } from 'react';
import { BASE_URL } from './utils/constants';
import type { Route } from './utils/types';

const HomePage = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/Test'));
const AddNewWordPage = lazy(() => import('./pages/AddWordPage'));
const RedirectToHome = lazy(() => import('./pages/RedirectToHome'));

export const routes: Array<Route> = [
  {
    to: '/',
    hideFromSidebar: true,
    Component: RedirectToHome,
  } as Route,
  {
    to: `${BASE_URL}/`,
    text: 'Home',
    activeNames: ['/home', '/'],
    Component: HomePage,
  },
  {
    to: `${BASE_URL}/test-me`,
    text: 'Test me',
    activeNames: ['/test-me'],
    Component: TestPage,
  },
  {
    to: `${BASE_URL}/add-word`,
    text: 'Add word',
    activeNames: ['/add-word'],
    Component: AddNewWordPage,
  },
];
