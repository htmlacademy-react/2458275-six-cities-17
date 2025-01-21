import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, Status} from '../../consts';
import {ReviewProcess} from '../../types/state-types';
import {fetchOfferReviewsAction, postCommentAction} from '../api-actions';
import {toast} from 'react-toastify';


const initialState: ReviewProcess = {
  reviews: [],
  newReviewPostingStatus: Status.Idle,
};

export const ReviewProcessSlice = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOfferReviewsAction.rejected, () => {
        toast.warn('Something went wrong while loading reviews. If you want to see the reviews, try reloading the page');
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
        toast.warn('Something went wrong while posting your review. Please try again, your opinion is really important for us');
      });
  }
});
