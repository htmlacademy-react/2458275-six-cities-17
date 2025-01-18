import {Review} from '../../types/reviews-types';
import ReviewsItem from '../reviews-item/reviews-item';
import {sortReviews} from '../../utils/common';
import {Comment} from '../../consts';

type ReviewsListProps = {
  reviews: Review[];
}
function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const displayedReviews = sortReviews(reviews).slice(Comment.MinAmount, Comment.MaxAmount);
  return (
    <ul className="reviews__list">
      {displayedReviews.map((review) => (<ReviewsItem key={review.id} review={review}/>))}
    </ul>
  );
}

export default ReviewsList;
