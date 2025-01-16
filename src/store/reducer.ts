import {createReducer} from '@reduxjs/toolkit';
import {CITIES, SortingOption, AuthorizationStatus} from '../consts';
import {Offer, OfferCity, FullOffer} from '../types/offers-types';
import {UserData} from '../types/user-data';
import {Review} from '../types/reviews-types';
import {loadOffers, changeCity, changeSortingOption, setDataLoadingStatus, setAuthorizationStatus, setUserData, loadOfferData, loadComments} from './action';

type initialState = {
  currentCity: OfferCity;
  offers: Offer[];
  currentSortingOption: SortingOption;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  offerData: FullOffer | null;
  comments: Review | null;
};

const initialState: initialState = {
  currentCity: CITIES[0],
  offers: [],
  currentSortingOption: SortingOption.Default,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  offerData: null,
  comments: null,
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadOfferData, (state, action) => {
      state.offerData = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};
