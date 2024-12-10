import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {MOCK_OFFERS} from './mocks/mock-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {MOCK_OFFERS}
    />
  </React.StrictMode>
);
