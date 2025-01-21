import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state-types';
import {Offer, FullOffer} from '../types/offers-types';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {Review, CommentData} from '../types/reviews-types';
import {loadOffers, setDataLoadingStatus, setAuthorizationStatus, setUserData, loadOfferData, loadReviews, loadNearbyPlaces, setCommentPosting, postNewComment} from './action';
import {APIRoute, AuthorizationStatus} from '../consts';
import {saveToken, dropToken} from '../services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferData',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOfferData(data));
  },
);

export const fetchOfferReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferReview',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadReviews(data));
  },
);

export const fetchNearbyPlacesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyPlaces',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.NearbyPlaces}`);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadNearbyPlaces(data));
  },
);

export const postCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async ({id, comment}, {dispatch, extra: api}) => {
    dispatch(setCommentPosting(true));
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, {rating: comment.rating, comment: comment.comment});
    dispatch(postNewComment(data));
    dispatch(setCommentPosting(false));
  },
);
