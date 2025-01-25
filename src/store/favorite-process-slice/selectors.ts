import {NameSpace} from '../../consts';
import { State } from '../../types/state-types';

export const getFavoriteOffersData = (state: State) => state[NameSpace.Favorite].favoriteOffers;
export const getFavoriteOffersLoadingStatus = (state: State) => state[NameSpace.Favorite].isFavoriteOffersDataLoading;
export const getFavoriteStatusById = (state: State, id: string) => state[NameSpace.Favorite].favoriteOffers.findIndex((offer) => offer.id === id) !== -1;
