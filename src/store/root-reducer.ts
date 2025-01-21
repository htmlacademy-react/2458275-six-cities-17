import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {AppProcessSlice} from './app-process-slice/app-process-slice';
import {fullOfferProcessSlice} from './full-offer-process-slice/full-offer-process-slice';
import {offersProcessSlice} from './offers-process-slice/offers-process-slice';
import {ReviewProcessSlice} from './review-process-slice/review-process-slice';
import {userProcessSlice} from './user-process-slice/user-process-slice';


export const rootReducer = combineReducers({
  [NameSpace.App]: AppProcessSlice.reducer,
  [NameSpace.FullOffer]: fullOfferProcessSlice.reducer,
  [NameSpace.Offers]: offersProcessSlice.reducer,
  [NameSpace.Review]: ReviewProcessSlice.reducer,
  [NameSpace.User]: userProcessSlice.reducer,
});
