import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {FavoriteOffersProcess} from '../../types/state-types';
import {fetchFavoriteOffersAction, toggleFavoriteSatusAction} from '../api-actions';
import {toast} from 'react-toastify';

const initialState: FavoriteOffersProcess = {
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
};

export const favoriteProcessSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteOffersDataLoading = false;
        toast.warn('Something went wrong while loading favorite offers. Please try again');
      })
      .addCase(toggleFavoriteSatusAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
          toast.success('The offer is added to your favorites list');
        } else {
          const favoriteOfferIndex = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);
          state.favoriteOffers.splice(favoriteOfferIndex, 1);
          toast.success('The offer is removed from your favorites list');
        }
      })
      .addCase(toggleFavoriteSatusAction.rejected, () => {
        toast.warn('Something went wrong while changing the offer status. Please try again');
      });
  }
});
