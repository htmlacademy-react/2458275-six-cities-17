import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {OffersProcess} from '../../types/state-types';
import {fetchOffersAction} from '../api-actions';

const initialState: OffersProcess = {
  offers: [],
  isOffersDataLoading: false,
};

export const offersProcessSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  }
});
