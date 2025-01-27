import {memo} from 'react';
import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offers-types';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferCardChange?: (id: string | null) => void;
  cardType: string;
}

function OffersListTemplate({offers, cardType, onActiveOfferCardChange}: OffersListProps): JSX.Element {
  const listClassName = cardType === 'favorites' ? 'favorites__places' : `places__list ${cardType === 'cities' ? 'cities__places-list tabs__content' : 'near-places__list'}`;
  return (
    <div className={listClassName}>
      {
        offers.map((offer) => (
          <OfferCard
            onActiveOfferCardChange={onActiveOfferCardChange}
            key={offer.id}
            offer={offer}
            cardType={cardType}
          />))
      }
    </div>
  );
}
const OffersList = memo(OffersListTemplate);

export default OffersList;
