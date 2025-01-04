import {Link} from 'react-router-dom';
import {AppRoute, CardType} from '../../consts';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import FavoritePlacesList from '../../components/favorite-places-list/favorite-places-list';
import {useAppSelector} from '../../hooks/index';


function FavoritesPage(){
  const offers = useAppSelector((state) => state.offers);
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
            <FavoritePlacesList offers={offers} cardType={CardType.Favourites}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
