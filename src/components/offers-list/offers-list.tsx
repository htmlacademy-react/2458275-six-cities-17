import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offers-types';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferCardChange?: (id: string | null) => void;
  cardType: string;
}

function OffersList({offers, cardType, onActiveOfferCardChange}: OffersListProps): JSX.Element {
  return (
    <div className={cardType === 'favorites' ? 'favorites__places' : `places__list ${cardType === 'cities' ? 'cities__places-list tabs__content' : 'near-places__list'}` }>
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
