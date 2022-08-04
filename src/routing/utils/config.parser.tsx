import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { RouteParams } from '../interfaces/route-params';
import { RoutesConfig } from '../interfaces/routes-config';
import { Route } from 'react-router-dom';

const configParser = {
  parseChildren(route: RouteParams): React.ReactElement {
    return (
      <Route key={uuidV4()} path={route.path} element={route.element}>
        {route.children?.map((child) => {
          if (child.children) this.parseChildren(child);
          return <Route key={uuidV4()} path={child.path} element={child.element} />;
        })}
      </Route>
    );
  },

  parseConfig(routesConfig: RoutesConfig): React.ReactElement[] {
    return routesConfig.routes.map((route) => {
      if (route.children) this.parseChildren(route);
      return <Route key={uuidV4()} path={route.path} element={route.element} />;
    });
  },
};

export default configParser;
