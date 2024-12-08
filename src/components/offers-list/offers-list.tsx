import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offers-types';

type Props = {
  offers: Offer[];
}

function OffersList({offers}: Props): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard key={offer.id}
            title={offer.title}
            id={offer.id}
            type={offer.type}
            isFavorite={offer.isFavorite}
            city={offer.city}
            price={offer.price}
            rating={offer.rating}
            isPremium={offer.isPremium}
            location={offer.location}
            previewImage={offer.previewImage}
          />))
      }
    </div>
  );
}

export default OffersList;
