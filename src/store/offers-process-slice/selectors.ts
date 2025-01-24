import {NameSpace} from '../../consts';
import { State } from '../../types/state-types';
import {Offer} from '../../types/offers-types';

export const getOffersData = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;

