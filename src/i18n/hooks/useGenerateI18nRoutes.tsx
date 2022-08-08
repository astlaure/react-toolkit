import React, { useMemo } from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v4 as uuid4 } from 'uuid';

function useGenerateI18nRoutes(element: React.ReactElement) {
  const { i18n } = useTranslation();

  const generateRoutes = () => {
    const supportedLangs = i18n.services.resourceStore.options.supportedLngs as string[];
    const defaultLang = Array.isArray(i18n.services.resourceStore.options.fallbackLng)
      ? i18n.services.resourceStore.options.fallbackLng[0]
      : i18n.services.resourceStore.options.fallbackLng;

    return supportedLangs.map((lang) => {
      if (lang === defaultLang) {
        return <Route key={uuid4()} path="/*" element={element} />;
      }
      return <Route key={uuid4()} path={`/${lang}/*`} element={element} />;
    });
  };

  return useMemo(() => generateRoutes(), []);
}

export default useGenerateI18nRoutes;
