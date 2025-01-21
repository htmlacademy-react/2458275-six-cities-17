import LocationTab from '../../components/location-tab/location-tab';
import {CITIES} from '../../consts';
import {OfferCity} from '../../types/offers-types';

type currentLocationProps = {
  currentLocation: OfferCity;
}

function LocationsList({currentLocation}: currentLocationProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <LocationTab
              key={city.name}
              currentLocation={currentLocation}
              city={city}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
