import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const TestPage = lazy(() => import('./pages/Test'));

export const routes = [
  {
    to: '/',
    text: 'Home',
    activeNames: ['/home', '/'],
    Component: HomePage,
  },
  {
    to: '/test-me',
    text: 'Test me',
    activeNames: ['/test-me'],
    Component: TestPage,
  },
];
