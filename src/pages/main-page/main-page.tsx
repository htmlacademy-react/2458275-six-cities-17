import {Helmet} from 'react-helmet-async';
import {useState} from 'react';

import {Offer} from '../../types/offers-types';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import {CITY_DETAILS, CardType, MapTypes} from '../../consts';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const [activeOfferCard, setActiveOfferCard] = useState<string | null>(null);
  const handleActiveOfferCardChange = (id: string | null) => {
    if (id !== activeOfferCard) {
      setActiveOfferCard(id);
    }
  };

  const currentCityDetails = CITY_DETAILS[3];

  const cityOffers = offers.filter((offer) => offer.city.name === currentCityDetails.name);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} {offers.length === 1 ? 'place' : 'places'} to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList onActiveOfferCardChange={handleActiveOfferCardChange} offers={offers} cardType={CardType.Main}/>
            </section>
            <div className="cities__right-section">
              <Map offers={cityOffers} cityLocation={currentCityDetails.location} activeOffer={activeOfferCard} mapType={MapTypes.Main}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
