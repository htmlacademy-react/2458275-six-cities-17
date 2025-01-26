import {ChangeEvent, useState} from 'react';
import ReviewStar from '../review-star/review-star';
import {Comment, ratings, RATING_INITIAL_VALUE} from '../../consts';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {postCommentAction} from '../../store/api-actions';
import {CommentForm} from '../../types/reviews-types';
import {getFullOfferData} from '../../store/full-offer-process-slice/selectors';
import {getNewReviewPostingStatus} from '../../store/review-process-slice/selectors';

const initialState: CommentForm = {
  rating: RATING_INITIAL_VALUE,
  comment: Comment.InitialState,
};

function ReviewForm():JSX.Element {

  const [formData, setFormData] = useState<CommentForm>(initialState);
  const reviewedOffer = useAppSelector(getFullOfferData);
  const isCommentPosting = useAppSelector(getNewReviewPostingStatus);
  const dispatch = useAppDispatch();

  const isSubmitButtonDisabled = formData.rating === RATING_INITIAL_VALUE
  || formData.comment.length < Comment.MinLength
  || formData.comment.length > Comment.MaxLength
  || isCommentPosting;

  const handleValueChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {value} = evt.target;
    setFormData(evt.target.name === 'review' ? {...formData, comment: value} : {...formData, rating: Number(value)});
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (reviewedOffer) {
      dispatch(postCommentAction({
        id: reviewedOffer.id,
        comment: formData
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            setFormData(initialState);
          }
        });
    }

  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratings.map(({value, title}) => <ReviewStar key={value} starsCount={value} starsCountMeaning={title} onChange={handleValueChange} isChecked={formData.rating === value} isDisabled={isCommentPosting}/>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formData.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleValueChange}
        disabled={isCommentPosting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
          <b className="reviews__text-amount">{Comment.MinLength} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          {isCommentPosting ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
