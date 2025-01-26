import LocationTab from '../../components/location-tab/location-tab';
import {cities} from '../../consts';
import {OfferCity} from '../../types/offers-types';

type LocationsListProps = {
  currentCity: OfferCity;
}
function LocationsList({currentCity}: LocationsListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationTab
              key={city.name}
              city={city}
              isTabActive = {currentCity.name === city.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
