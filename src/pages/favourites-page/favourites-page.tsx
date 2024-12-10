import Header from '../../components/header/header';
import {Offer} from '../../types/offers-types';
import FavouritePlacesList from '../../components/favourite-places-list/favourite-places-list';

type FavoritesPageProps = {
  offers: Offer[];
}
function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavouritePlacesList offers={offers} cardType='favourites'/>
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
