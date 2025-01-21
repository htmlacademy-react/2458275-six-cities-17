import {NameSpace, SortingOption} from '../../consts';
import { State } from '../../types/state-types';
import {OfferCity} from '../../types/offers-types';

export const getCurrentCity = (state: State): OfferCity => state[NameSpace.App].currentCity;
export const getCurrentSortingOption = (state: State): SortingOption => state[NameSpace.App].currentSortingOption;
