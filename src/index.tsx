import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './consts';
import {offers} from './mocks/offers';
import {comments} from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placeCardsCount = {Setting.placeCardsCount}
      offers = {offers}
      comments = {comments}
    />
  </React.StrictMode>
);
