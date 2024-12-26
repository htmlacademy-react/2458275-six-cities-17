import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../consts';
import {Offer} from '../types/offers-types';
import {loadOffers} from './action';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as Offer[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
