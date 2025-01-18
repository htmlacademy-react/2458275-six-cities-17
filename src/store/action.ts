import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferCity, FullOffer} from '../types/offers-types';
import {UserData} from '../types/user-data';
import {Review} from '../types/reviews-types';
import {SortingOption, AuthorizationStatus} from '../consts';

export const changeCity = createAction<OfferCity>('app/changeCity');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const changeSortingOption = createAction<SortingOption>('app/changeSortingOption');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUserData = createAction<UserData>('user/setUserData');
export const loadOfferData = createAction<FullOffer>('data/loadOfferData');
export const loadReviews = createAction<Review>('data/loadReviews');
export const loadNearbyPlaces = createAction<Offer[]>('data/loadNearbyPlaces');


