import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import {Offer} from '../../types/offers-types';
import FavoritePlacesList from '../../components/favorite-places-list/favorite-places-list';

type FavoritesPageProps = {
  offers: Offer[];
}
function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlacesList offers={offers} cardType='favorites'/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
