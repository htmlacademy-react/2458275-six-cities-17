import {Offer} from '../types/offers-types';

const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

const getRatingStarsCount = (rating: number): string => {
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

export {capitalize, getRatingStarsCount, groupOffersByCity, getFormattedDate, getDateWithoutTime};
