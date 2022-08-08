import React, { useMemo } from 'react';
import { Route } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';
import { RouteParams } from '../interfaces/route-params';
import { RoutesConfig } from '../interfaces/routes-config';

function useGenerateRoutes(routesConfig: RoutesConfig) {
  const parseChildren = (route: RouteParams): React.ReactElement => {
    return (
      <Route key={uuid4()} path={route.path} element={route.element}>
        {route.children?.map((child) => {
          if (child.children) parseChildren(child);
          return <Route key={uuid4()} path={child.path} element={child.element} />;
        })}
      </Route>
    );
  };

  const parseRoutes = () => {
    return routesConfig.routes.map((route) => {
      if (route.children) parseChildren(route);
      return <Route key={uuid4()} path={route.path} element={route.element} />;
    });
  };

  return useMemo(() => parseRoutes(), []);
}

export default useGenerateRoutes;
