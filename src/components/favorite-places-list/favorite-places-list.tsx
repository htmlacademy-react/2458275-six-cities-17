import {Offer} from '../../types/offers-types';
import FavoritePlace from '../favorite-place/favorite-place';
import {groupOffersByCity} from '../../utils/common';

type FavoritePlacesListProps = {
  offers: Offer[];
  cardType: string;
}

function FavoritePlacesList({offers, cardType}: FavoritePlacesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const groupedOffes = groupOffersByCity(favoriteOffers);

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffes).map(([city, cityFavoriteOffers])=> (
        <FavoritePlace key={city} city={city} offers={cityFavoriteOffers} cardType={cardType}/>
      ))}
    </ul>
  );
}

export default FavoritePlacesList;
