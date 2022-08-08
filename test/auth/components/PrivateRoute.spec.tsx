import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage';
import { PrivateRoute } from '../../../src';
import HomePage from '../../pages/HomePage';

describe('PrivateRoute component test suite', () => {
  it('should redirect to the login page', () => {
    const element = render(
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={(
              <PrivateRoute redirect="/login">
                <HomePage />
              </PrivateRoute>
            )}
          />
          <Route path="login" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>,
    );

    expect(element.getByText('About page')).toBeDefined();
  });
});
