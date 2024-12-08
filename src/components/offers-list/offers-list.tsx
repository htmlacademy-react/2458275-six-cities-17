import OfferCard from '../../components/offer-card/offer-card';
import {Offer} from '../../types/offers-types';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferCardChange: (id: string | null) => void;
}

function OffersList({offers, onActiveOfferCardChange}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            onActiveOfferCardChange={onActiveOfferCardChange}
            key={offer.id}
            offer={offer}
          />))
      }
    </div>
  );
}

export default OffersList;
