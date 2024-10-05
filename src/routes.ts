import { lazy } from 'react';
import type { Route } from './utils/types';

const HomePage = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/Test'));
const RedirectToHome = lazy(() => import('./pages/RedirectToHome'));

const BASE_URL = '/learn-russian';

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
];
