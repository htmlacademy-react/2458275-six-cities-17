import {CardType} from '../../consts';
import FavoritePlacesList from '../../components/favorite-places-list/favorite-places-list';

function FavoritePlacesContainer(){

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritePlacesList cardType={CardType.Favourites}/>
    </section>
  );
}

export default FavoritePlacesContainer;
