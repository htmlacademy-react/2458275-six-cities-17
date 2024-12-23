import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {MOCK_OFFERS} from './mocks/mock-offers';
import {MOCK_REVIEWS} from './mocks/mock-reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {MOCK_OFFERS} reviews = {MOCK_REVIEWS}
    />
  </React.StrictMode>
);
