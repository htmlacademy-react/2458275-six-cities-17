import {store} from '../store/index';
import {AuthorizationStatus, SortingOption} from '../consts';
import {UserData} from '../types/user-data';
import {Offer, OfferCity, FullOffer} from '../types/offers-types';
import {Review} from '../types/reviews-types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type OffersProcess = {
  offers: Offer[];
  isOffersDataLoading: boolean;
}
export type AppProcess = {
  currentCity: OfferCity;
  currentSortingOption: SortingOption;
}
export type FullOfferProcess = {
  fullOfferData: FullOffer | null;
  nearbyPlaces: Offer[];
  isFullOfferDataLoading: boolean;
  isFullOfferLoadingError: boolean;
  isNearbyPlacesDataLoading: boolean;
}

export type ReviewProcess = {
  reviews: Review[];
  isNewReviewPosting: boolean;
  isReviewsDataLoading: boolean;
}

export type FavoriteOffersProcess = {
favoriteOffers: Offer[];
isFavoriteOffersDataLoading: boolean;
}
