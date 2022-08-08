import React from 'react';
import { Routes } from 'react-router-dom';
import useGenerateRoutes from './hooks/useGenerateRoutes';
import { RoutesConfig } from './interfaces/routes-config';

export interface Props {
  routesConfig: RoutesConfig;
}

function ConfigRoutes(props: Props) {
  const { routesConfig } = props;
  const routes = useGenerateRoutes(routesConfig);
  return (
    <Routes>
      {routes}
    </Routes>
  );
}

export default ConfigRoutes;
