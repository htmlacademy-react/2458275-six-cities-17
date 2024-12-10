import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offers-types';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferCardChange?: (id: string | null) => void;
  cardType: string;
}

function OffersList({offers, cardType, onActiveOfferCardChange}: OffersListProps): JSX.Element {
  return (
    <div className={cardType === 'favourites' ? 'favorites__places' : 'cities__places-list places__list tabs__content'}>
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
