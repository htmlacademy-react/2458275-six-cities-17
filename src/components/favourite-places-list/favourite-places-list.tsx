import {Offer} from '../../types/offers-types';
import FavouritePlace from '../favourite-place/favourite-place';
import {groupOffersByCity} from '../../utils/common';

type FavouritePlacesListProps = {
  offers: Offer[];
  cardType: string;
}

function FavouritePlacesList({offers, cardType}: FavouritePlacesListProps): JSX.Element {
  const favouriteOffers = offers.filter((offer) => offer.isFavorite);
  const groupedOffes = groupOffersByCity(favouriteOffers);

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffes).map(([city, cityFavouriteOffers])=> (
        <FavouritePlace key={city} city={city} offers={cityFavouriteOffers} cardType={cardType}/>
      ))}
    </ul>
  );
}

export default FavouritePlacesList;
