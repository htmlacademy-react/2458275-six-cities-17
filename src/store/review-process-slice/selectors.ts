import {NameSpace} from '../../consts';
import { State } from '../../types/state-types';
import {Review} from '../../types/reviews-types';


export const getNewReviewPostingStatus = (state: State): boolean => state[NameSpace.Review].isNewReviewPosting;
export const getReviews = (state: State): Review[] => state[NameSpace.Review].reviews;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Review].isReviewsDataLoading;
