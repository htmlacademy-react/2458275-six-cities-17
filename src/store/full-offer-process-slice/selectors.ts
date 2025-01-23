import {NameSpace} from '../../consts';
import { State } from '../../types/state-types';
import {FullOffer, Offer} from '../../types/offers-types';

export const getFullOfferData = (state: State): FullOffer | null => state[NameSpace.FullOffer].fullOfferData;
export const getNearbyPlaces = (state: State): Offer[]=> state[NameSpace.FullOffer].nearbyPlaces;
export const getFullOfferLoadingStatus = (state: State): boolean => state[NameSpace.FullOffer].isFullOfferDataLoading;
export const getNearbyPlacesLoadingStatus = (state: State): boolean => state[NameSpace.FullOffer].isNearbyPlacesDataLoading;
