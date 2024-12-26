import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers-types';

export const changeCity = createAction('changeCity');
export const loadOffers = createAction<Offer[]>('loadOffers');
