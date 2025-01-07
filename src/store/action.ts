import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferCity} from '../types/offers-types';
import {SortingOption} from '../consts';

export const changeCity = createAction<OfferCity>('changeCity');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const changeSortingOption = createAction<SortingOption>('changeSortingOption');
