import React from 'react';
import { render } from '@testing-library/react';
// import {  } from '@testing-library/user-event';
import { ConfigRouter } from '../../src/routing';
import routesConfig from '../__mocks__/routes.config';

describe('ConfigRouter Test Suite', () => {
  it('should render the correct tree', () => {
    const element = render(
      <ConfigRouter config={routesConfig} />
    );

    const homepage = element.getByText('Home page');
    expect(homepage).toBeDefined();
  });
});
