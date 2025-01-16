import {Offer} from '../types/offers-types';
import {SortingOption} from '../consts';

const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

const getRatingValue = (rating: number): string => {
  const ratingProcents = `${Math.round(rating) * 20}%`;
  return ratingProcents;
};

const groupOffersByCity = (offers: Offer[]) => offers.reduce((groupedOffers: Record<string, Offer[]>, offer) => {
  if (!Object.hasOwn(groupedOffers, offer.city.name)) {
    groupedOffers[offer.city.name] = [];
  }
  groupedOffers[offer.city.name].push(offer);
  return groupedOffers;
}, {});

const getFormattedDate = (date:string) => new Date(date).toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});

const getDateWithoutTime = (date:string):string => date.split('T')[0];

const sortBy = {
  [SortingOption.Default]: (offers:Offer[]) => [...offers],
  [SortingOption.MinPriceFirst]: (offers:Offer[]) => [...offers].sort((firstCard, secondCard) => firstCard.price - secondCard.price),
  [SortingOption.MaxPriceFirst]: (offers:Offer[]) => [...offers].sort((firstCard, secondCard) => secondCard.price - firstCard.price),
  [SortingOption.TopRatedFirst]: (offers:Offer[]) => [...offers].sort((firstCard, secondCard) => secondCard.rating - firstCard.rating),
};

const sortOffers = (offers:Offer[], chosenSortingOption:SortingOption) => sortBy[chosenSortingOption](offers);

export {capitalize, getRatingValue, groupOffersByCity, getFormattedDate, getDateWithoutTime, sortOffers};
