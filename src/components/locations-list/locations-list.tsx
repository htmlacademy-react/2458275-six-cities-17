import {CITIES} from '../../consts';
import {changeCity} from '../../store/action';
import {useAppDispatch} from '../../hooks/index';
import {OfferCity} from '../../types/offers-types';

type currentLocationProps = {
  currentLocation: OfferCity;
}

function LocationsList({currentLocation}: currentLocationProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${city.name === currentLocation.name ? 'tabs__item--active' : ''}`}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
