import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, Status} from '../../consts';
import {ReviewProcess} from '../../types/state-types';
import {fetchOfferReviewsAction, postCommentAction} from '../api-actions';

const initialState: ReviewProcess = {
  reviews: [],
  isReviewsDataLoading: false,
  newReviewPostingStatus: Status.Idle,
};

export const ReviewProcessSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchOfferReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.newReviewPostingStatus = Status.Loading;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.newReviewPostingStatus = Status.Success;
        state.reviews.push(action.payload);
        state.newReviewPostingStatus = Status.Idle;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.newReviewPostingStatus = Status.Error;
      });
  }
});
