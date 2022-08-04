import React from 'react';

export interface RouteParams {
  path: string;
  element: React.ReactElement;
  children?: RouteParams[];
}
