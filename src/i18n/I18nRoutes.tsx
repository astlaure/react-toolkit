import React from 'react';
import { Routes } from 'react-router-dom';
import useGenerateI18nRoutes from './hooks/useGenerateI18nRoutes';

export interface Props {
  children: React.ReactElement;
}

function I18nRoutes(props: Props) {
  const { children } = props;
  const routes = useGenerateI18nRoutes(children);

  return (
    <Routes>
      {routes}
    </Routes>
  );
}

export default I18nRoutes;
