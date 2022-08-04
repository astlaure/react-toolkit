import React, { useMemo } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import configParser from './utils/config.parser';
import { RoutesConfig } from './interfaces/routes-config';

export interface Props {
  config: RoutesConfig;
}

function ConfigRouter(props: Props) {
  const { config } = props;
  const routes = useMemo(() => configParser.parseConfig(config), []);

  return (
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  );
}

export default ConfigRouter;
