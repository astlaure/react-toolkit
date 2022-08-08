## App.tsx

```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ConfigRoutes from './router/ConfigRoutes';
import I18nRoutes from './i18n/I18nRoutes';
import routesConfig from './router';

function App() {
  return (
    <React.Suspense>
      <BrowserRouter>
        <I18nRoutes>
          <ConfigRoutes routesConfig={routesConfig} />
        </I18nRoutes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
```

## Index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);
```
