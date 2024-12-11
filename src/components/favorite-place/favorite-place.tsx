import {Offer} from '../../types/offers-types';
import OffersList from '../offers-list/offers-list';

type FavoritePlaceProps = {
  offers: Offer[];
  cardType: string;
  city: string;
}

function FavoritePlace({offers, cardType, city}: FavoritePlaceProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <OffersList offers={offers} cardType={cardType}/>
    </li>
  );
}

export default FavoritePlace;
