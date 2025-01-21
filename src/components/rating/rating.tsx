import {getRatingValue} from '../../utils/common';

type RatingProps = {
  ratingValue: number;
  ratingType: 'reviewRating' | 'averageOfferRating';
}
function Rating({ratingValue, ratingType}: RatingProps): JSX.Element {
  const ratingClass = `${ratingType === 'reviewRating' ? 'reviews__rating rating' : 'offer__rating'} rating`;

  const starsClass = `${ratingType === 'reviewRating' ? 'reviews__stars' : 'offer__stars'} rating__stars`;

  return (
    <div className={ratingClass}>
      <div className={starsClass}>
        <span style={{width: getRatingValue(ratingValue)}} />
        <span className="visually-hidden">Rating</span>
      </div>
      {ratingType === 'averageOfferRating' && (<span className="offer__rating-value rating__value">{ratingValue}</span>)}
    </div>

  );
}

export default Rating;
