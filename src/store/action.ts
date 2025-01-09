import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferCity} from '../types/offers-types';
import {SortingOption} from '../consts';

export const changeCity = createAction<OfferCity>('app/changeCity');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const changeSortingOption = createAction<SortingOption>('app/changeSortingOption');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
