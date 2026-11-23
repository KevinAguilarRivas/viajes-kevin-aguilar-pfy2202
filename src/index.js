import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import { client } from './graphql/client';
import { ViajeProvider } from './context/ViajeContext';

// Se inicia MSW antes de renderizar (también en producción, porque en GitHub Pages no hay backend)
async function iniciarMocks() {
  const { worker } = await import('./mocks/browser');
  return worker.start({
    serviceWorker: { url: `${process.env.PUBLIC_URL}/mockServiceWorker.js` },
    onUnhandledRequest: 'bypass',
    quiet: process.env.NODE_ENV === 'production',
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));

iniciarMocks()
  .catch((error) => console.error('No se pudo iniciar el backend mock (MSW):', error))
  .finally(() => {
    root.render(
      <React.StrictMode>
        {/* HashRouter permite que las rutas funcionen en GitHub Pages (sitio estático) */}
        <HashRouter>
          <ApolloProvider client={client}>
            <ViajeProvider>
              <App />
            </ViajeProvider>
          </ApolloProvider>
        </HashRouter>
      </React.StrictMode>
    );
  });
