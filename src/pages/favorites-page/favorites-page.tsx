import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/index';
import {getFavoriteOffersData, getFavoriteOffersLoadingStatus} from '../../store/favorite-process-slice/selectors';
import LoadingPage from '../../pages/loading-page/loading-page';
import Header from '../../components/header/header';
import FavoritePlacesContainer from '../../components/favorite-places-container/favorite-places-container';
import FavoritePlacesEmptyContainer from '../../components/favorite-places-container/favorite-places-empty-container';

function FavoritesPage(){
  const favoriteOffersAmount = useAppSelector(getFavoriteOffersData).length;
  const isFavoriteOffersDataLoading = useAppSelector(getFavoriteOffersLoadingStatus);

  if (isFavoriteOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffersAmount > 0 ? <FavoritePlacesContainer /> : <FavoritePlacesEmptyContainer />}
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
