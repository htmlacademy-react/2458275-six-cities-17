import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers-types';
import {capitalize, getRatingValue} from '../../utils/common';
import {AppRoute} from '../../consts';

type OfferCardProps = {
  offer: Offer;
  onActiveOfferCardChange?: (id: string | null) => void;
  cardType: string;
}

function OfferCard({offer, cardType, onActiveOfferCardChange}: OfferCardProps): JSX.Element {
  const {title, type, price, isPremium, rating, previewImage, isFavorite, id} = offer;
  return (
    <article className={`${cardType}__card place-card`}
      onMouseEnter={() => onActiveOfferCardChange && onActiveOfferCardChange(id)}
      onMouseLeave={() => onActiveOfferCardChange && onActiveOfferCardChange(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === 'favorites' ? 150 : 260}
            height={cardType === 'favorites' ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cardType === 'favorites' ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingValue(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
