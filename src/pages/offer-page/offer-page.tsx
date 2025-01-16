import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import {Review} from '../../types/reviews-types';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Rating from '../../components/rating/rating';
import OfferHost from '../../components/offer-host/offer-host';
import OffersList from '../../components/offers-list/offers-list';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import Map from '../../components/map/map';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {CardType, MapTypes, OfferCardCount} from '../../consts';
import LoadingPage from '../../pages/loading-page/loading-page';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {fetchOfferDataAction} from '../../store/api-actions';
import {capitalize} from '../../utils/common';

type OfferPageProps = {
  reviews: Review[];
}

function OfferPage({reviews}: OfferPageProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.currentCity);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  /*const cityOffers = offers.filter((offer) => offer.city.name === currentCity.name); */

  const params = useParams();
  const activeOfferId = params.id;
  const dispatch = useAppDispatch();

  /*const nearPlaces = cityOffers.filter((offer) => offer.id !== activeOfferId).slice(OfferCardCount.Min, OfferCardCount.Max);
  const activeOfferDetails = offers.filter((offer) => offer.id === activeOfferId);
  const displayedOffers = [...nearPlaces, ...activeOfferDetails]; */

  useEffect(() => {
    if (activeOfferId) {
      dispatch(fetchOfferDataAction(activeOfferId));
    }
  }, [activeOfferId, dispatch]);

  const currentOfferData = useAppSelector((state) => state.offerData);
  const comments = useAppSelector((state) => state.comments);
  console.log(currentOfferData);

  if (isDataLoading) {
    return (
      <LoadingPage />
    );
  }
  if (!currentOfferData && !isDataLoading) {
    return <NotFoundPage />;
  }

  const { isPremium, description, rating, type, bedrooms, maxAdults, price, title, isFavorite, goods, host, images } = currentOfferData;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Offer</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (<div className="offer__mark"><span>Premium</span></div>)}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <FavoriteButton buttonType={'activeOfferButton'} isFavorite={isFavorite} />
              </div>
              <Rating ratingType={'averageOfferRating'} ratingValue={rating}/>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{capitalize(type)}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
              Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideList goods={goods}/>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost name={host.name} avatarUrl={host.avatarUrl} isPro={host.isPro}/>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map offers={offers} cityLocation={currentCity.location} activeOffer={activeOfferId} mapType={MapTypes.Offer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OffersList offers={offers} cardType={CardType.Offer}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
