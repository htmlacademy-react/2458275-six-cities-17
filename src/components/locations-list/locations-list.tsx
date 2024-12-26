import {CITIES} from '../../consts';

type currentLocationProps = {
  currentLocation: string;
}

function LocationsList({currentLocation}: currentLocationProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${city === currentLocation ? 'tabs__item--active' : ''}`}
                href="#"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
