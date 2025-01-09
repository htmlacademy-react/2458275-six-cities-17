import {createReducer} from '@reduxjs/toolkit';
import {CITIES, SortingOption} from '../consts';
import {Offer, OfferCity} from '../types/offers-types';
import {loadOffers, changeCity, changeSortingOption, setOffersDataLoadingStatus} from './action';

type initialState = {
  currentCity: OfferCity;
  offers: Offer[];
  currentSortingOption: SortingOption;
  isOffersDataLoading: boolean;
};

const initialState: initialState = {
  currentCity: CITIES[0],
  offers: [],
  currentSortingOption: SortingOption.Default,
  isOffersDataLoading: false,
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
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
