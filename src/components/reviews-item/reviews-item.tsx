import {Review} from '../../types/reviews-types';
import {getFormattedDate, getDateWithoutTime} from '../../utils/common';
import Rating from '../../components/rating/rating';

type ReviewsItemProps = {
  review: Review;
}
function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {comment, date, rating, user} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating ratingType={'reviewRating'} ratingValue={rating}/>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getDateWithoutTime(date)}>
          {getFormattedDate(date)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
