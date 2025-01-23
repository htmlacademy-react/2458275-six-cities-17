import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offers-types';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferCardChange?: (id: string | null) => void;
  cardType: string;
}
const getListClassName = (cardType: string) => (cardType === 'favorites' ? 'favorites__places' : `places__list ${cardType === 'cities' ? 'cities__places-list tabs__content' : 'near-places__list'}`);

function OffersList({offers, cardType, onActiveOfferCardChange}: OffersListProps): JSX.Element {
  return (
    <div className={getListClassName(cardType)}>
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

export default OffersList;
