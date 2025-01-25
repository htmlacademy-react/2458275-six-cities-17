import FavoritePlace from '../favorite-place/favorite-place';
import {groupOffersByCity} from '../../utils/common';
import {CardType} from '../../consts';
import {useAppSelector} from '../../hooks/index';
import {getFavoriteOffersData} from '../../store/favorite-process-slice/selectors';

type FavoritePlacesListProps = {
  cardType: CardType;
}

function FavoritePlacesList({cardType}: FavoritePlacesListProps): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffersData);
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
