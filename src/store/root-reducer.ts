import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {appProcessSlice} from './app-process-slice/app-process-slice';
import {fullOfferProcessSlice} from './full-offer-process-slice/full-offer-process-slice';
import {offersProcessSlice} from './offers-process-slice/offers-process-slice';
import {reviewProcessSlice} from './review-process-slice/review-process-slice';
import {userProcessSlice} from './user-process-slice/user-process-slice';
import {favoriteProcessSlice} from './favorite-process-slice/favorite-process-slice';


export const rootReducer = combineReducers({
  [NameSpace.App]: appProcessSlice.reducer,
  [NameSpace.FullOffer]: fullOfferProcessSlice.reducer,
  [NameSpace.Offers]: offersProcessSlice.reducer,
  [NameSpace.Review]: reviewProcessSlice.reducer,
  [NameSpace.User]: userProcessSlice.reducer,
  [NameSpace.Favorite]: favoriteProcessSlice.reducer,
});
