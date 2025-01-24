import {useAppSelector} from '../../hooks/index';
import {getReviews} from '../../store/review-process-slice/selectors';
import {getAuthorizationStatus} from '../../store/user-process-slice/selectors';
import ReviewsList from '../../components/reviews-list/reviews-list';
import ReviewForm from '../../components/review-form/review-form';
import {AuthorizationStatus} from '../../consts';

function ReviewsContainer(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const currentAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="offer__reviews reviews">
      {reviews.length > 0 && (
        <h2 className="reviews__title">
  Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>)}
      <ReviewsList reviews={reviews} />
      {currentAuthorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default ReviewsContainer;
