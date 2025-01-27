import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, cities, SortingOption} from '../../consts';
import {AppProcess} from '../../types/state-types';
import {OfferCity} from '../../types/offers-types';

const initialState: AppProcess = {
  currentCity: cities[0],
  currentSortingOption: SortingOption.Default,
};

export const appProcessSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<OfferCity>) => {
      state.currentCity = action.payload;
    },
    changeSortingOption: (state, action: PayloadAction<SortingOption>) => {
      state.currentSortingOption = action.payload;
    }
  },
});

export const {changeCity, changeSortingOption} = appProcessSlice.actions;


