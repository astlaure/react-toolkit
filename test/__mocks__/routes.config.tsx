import React from 'react';
import { RoutesConfig } from '../../src/routing/interfaces/routes-config';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ParentPage from '../pages/ParentPage';
import ChildPage from '../pages/ChildPage';
import ChildIdPage from '../pages/ChildIdPage';

const routesConfig: RoutesConfig = {
  routes: [
    { path: '', element: <HomePage /> },
    { path: 'about', element: <AboutPage /> },
    {
      path: 'parent',
      element: <ParentPage />,
      children: [
        { path: '', element: <ChildPage /> },
        { path: ':id', element: <ChildIdPage /> },
      ],
    },
  ],
};

export default routesConfig;
