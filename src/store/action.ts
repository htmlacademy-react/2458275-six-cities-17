import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferCity} from '../types/offers-types';
import {UserData} from '../types/user-data';
import {SortingOption, AuthorizationStatus} from '../consts';

export const changeCity = createAction<OfferCity>('app/changeCity');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const changeSortingOption = createAction<SortingOption>('app/changeSortingOption');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUserData = createAction<UserData>('user/setUserData');

