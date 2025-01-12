import {createReducer} from '@reduxjs/toolkit';
import {CITIES, SortingOption, AuthorizationStatus} from '../consts';
import {Offer, OfferCity} from '../types/offers-types';
import {UserData} from '../types/user-data';
import {loadOffers, changeCity, changeSortingOption, setOffersDataLoadingStatus, setAuthorizationStatus, setUserData} from './action';

type initialState = {
  currentCity: OfferCity;
  offers: Offer[];
  currentSortingOption: SortingOption;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: initialState = {
  currentCity: CITIES[0],
  offers: [],
  currentSortingOption: SortingOption.Default,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
