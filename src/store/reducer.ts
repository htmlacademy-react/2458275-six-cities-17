import {createReducer} from '@reduxjs/toolkit';
import {CITIES, SortingOption} from '../consts';
import {Offer, OfferCity} from '../types/offers-types';
import {loadOffers, changeCity, changeSortingOption} from './action';

const initialState = {
  currentCity: CITIES[0] as OfferCity,
  offers: [] as Offer[],
  currentSortingOption: SortingOption.Default,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortingOption, (state, action) => {
      state.currentSortingOption = action.payload;
    });
});

export {reducer};
