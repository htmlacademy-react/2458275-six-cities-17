import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {FullOfferProcess} from '../../types/state-types';
import {fetchOfferDataAction, fetchNearbyPlacesAction} from '../api-actions';
import {toast} from 'react-toastify';

const initialState: FullOfferProcess = {
  fullOfferData: null,
  nearbyPlaces: [],
  isFullOfferDataLoading: true,
  isFullOfferLoadingError: false,
  isNearbyPlacesDataLoading: true,
};

export const fullOfferProcessSlice = createSlice({
  name: NameSpace.FullOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferDataAction.pending, (state) => {
        state.isFullOfferDataLoading = true;
        state.isFullOfferLoadingError = false;
      })
      .addCase(fetchOfferDataAction.fulfilled, (state, action) => {
        state.fullOfferData = action.payload;
        state.isFullOfferLoadingError = false;
        state.isFullOfferDataLoading = false;
      })
      .addCase(fetchOfferDataAction.rejected, (state) => {
        state.isFullOfferDataLoading = false;
        state.isFullOfferLoadingError = true;
        toast.error('Something went wrong while loading the offer. Please try again');
      })
      .addCase(fetchNearbyPlacesAction.pending, (state) => {
        state.isNearbyPlacesDataLoading = true;
      })
      .addCase(fetchNearbyPlacesAction.fulfilled, (state, action) => {
        state.nearbyPlaces = action.payload;
      })
      .addCase(fetchNearbyPlacesAction.rejected, () => {
        toast.warn('Something went wrong while loading the nearby places. If you want to see the nearby places, try reloading the page');
      });
  }
});
