import {useState, useMemo} from 'react';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import {useAppSelector} from '../../hooks/index';
import {CardType, MapType} from '../../consts';
import {sortOffers, getMapPoints} from '../../utils/common';
import {OfferCity, Offer} from '../../types/offers-types';
import {getCurrentSortingOption} from '../../store/app-process-slice/selectors';

type currentLocationProps = {
  currentLocation: OfferCity;
  offers: Offer[];
}

function PlacesContainer({currentLocation, offers}: currentLocationProps): JSX.Element {

  const currentSortingOption = useAppSelector(getCurrentSortingOption);

  const mapPoints = useMemo(() => getMapPoints(offers), [offers]);

  const sortedCityOffers = sortOffers(offers, currentSortingOption);

  const [activeOfferCard, setActiveOfferCard] = useState<string | null>(null);

  const handleActiveOfferCardChange = (id: string | null) => {
    if (id !== activeOfferCard) {
      setActiveOfferCard(id);
    }
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {offers.length === 1 ? 'place' : 'places'} to stay in {currentLocation.name}</b>
        <PlacesSorting />
        <OffersList onActiveOfferCardChange={handleActiveOfferCardChange} offers={sortedCityOffers} cardType={CardType.Main}/>
      </section>
      <div className="cities__right-section">
        <Map mapPoints={mapPoints} cityLocation={currentLocation.location} activeOffer={activeOfferCard} mapType={MapType.Main}/>
      </div>
    </div>
  );
}

export default PlacesContainer;
