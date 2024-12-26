import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import {MOCK_OFFERS} from './mocks/mock-offers';
import {MOCK_REVIEWS} from './mocks/mock-reviews';
import {loadOffers} from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOffers(MOCK_OFFERS));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        reviews = {MOCK_REVIEWS}
      />
    </Provider>
  </React.StrictMode>
);
