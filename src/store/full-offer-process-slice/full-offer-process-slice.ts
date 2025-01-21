import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {FullOfferProcess} from '../../types/state-types';
import {fetchOfferDataAction, fetchNearbyPlacesAction} from '../api-actions';

const initialState: FullOfferProcess = {
  fullOfferData: null,
  nearbyPlaces: [],
  isFullOfferDataLoading: false,
  isNearbyPlacesLoading: false,
};

export const fullOfferProcessSlice = createSlice({
  name: NameSpace.FullOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferDataAction.pending, (state) => {
        state.isFullOfferDataLoading = true;
      })
      .addCase(fetchOfferDataAction.fulfilled, (state, action) => {
        state.fullOfferData = action.payload;
        state.isFullOfferDataLoading = false;
      })
      .addCase(fetchOfferDataAction.rejected, (state) => {
        state.isFullOfferDataLoading = false;
      })
      .addCase(fetchNearbyPlacesAction.pending, (state) => {
        state.isNearbyPlacesLoading = true;
      })
      .addCase(fetchNearbyPlacesAction.fulfilled, (state, action) => {
        state.nearbyPlaces = action.payload;
        state.isNearbyPlacesLoading = false;
      })
      .addCase(fetchNearbyPlacesAction.rejected, (state) => {
        state.isNearbyPlacesLoading = false;
      });
  }
});
