import {createReducer} from '@reduxjs/toolkit';
import {CITY_DETAILS} from '../consts';
import {Offer, OfferCity} from '../types/offers-types';
import {loadOffers, changeCity} from './action';

const initialState = {
  currentCity: CITY_DETAILS[0] as OfferCity,
  offers: [] as Offer[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};
