import {Helmet} from 'react-helmet-async';
import {useState} from 'react';

import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import MainEmptyPage from './main-empty-page';
import LoadingPage from '../../pages/loading-page/loading-page';

import {useAppSelector} from '../../hooks/index';
import {CardType, MapTypes} from '../../consts';
import {sortOffers, getMapPoints} from '../../utils/common';

function MainPage(){
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const currentSortingOption = useAppSelector((state) => state.currentSortingOption);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const cityOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const sortedCityOffers = sortOffers(cityOffers, currentSortingOption);

  const mapPoints = getMapPoints(cityOffers);

  const [activeOfferCard, setActiveOfferCard] = useState<string | null>(null);

  const handleActiveOfferCardChange = (id: string | null) => {
    if (id !== activeOfferCard) {
      setActiveOfferCard(id);
    }
  };

  if (isDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList currentLocation={currentCity}/>
        <div className="cities">
          {(sortedCityOffers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} {cityOffers.length === 1 ? 'place' : 'places'} to stay in {currentCity.name}</b>
                <PlacesSorting />
                <OffersList onActiveOfferCardChange={handleActiveOfferCardChange} offers={sortedCityOffers} cardType={CardType.Main}/>
              </section>
              <div className="cities__right-section">
                <Map mapPoints={mapPoints} cityLocation={currentCity.location} activeOffer={activeOfferCard} mapType={MapTypes.Main}/>
              </div>
            </div> : <MainEmptyPage currentLocation={currentCity}/>)}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
