import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favourites-page/favourites-page';
import LoginPage from '../../pages/favourites-page/favourites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoute} from '../../consts';

import {Route, BrowserRouter, Routes} from 'react-router-dom';

type AppProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placeCardsCount={placeCardsCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
