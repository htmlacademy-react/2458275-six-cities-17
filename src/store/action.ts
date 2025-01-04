import {createAction} from '@reduxjs/toolkit';
import {Offer, OfferCity} from '../types/offers-types';

export const changeCity = createAction<OfferCity>('changeCity');
export const loadOffers = createAction<Offer[]>('loadOffers');
