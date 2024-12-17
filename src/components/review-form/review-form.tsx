import {ChangeEvent, useState} from 'react';
import RatingStar from '../rating-star/rating-star';
import {Comment, RATINGS, RATING_INITIAL_VALUE} from '../../consts';

type FormDataType = {
  rating: number;
  comment: string;
};
const initialState: FormDataType = {
  rating: RATING_INITIAL_VALUE,
  comment: Comment.InitialState,
};

function ReviewForm():JSX.Element {

  const [formData, setFormData] = useState<FormDataType>(initialState);
  const isSubmitButtonDisabled = formData.rating === RATING_INITIAL_VALUE
  || formData.comment.length < Comment.MinLength
  || formData.comment.length > Comment.MaxLength;

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(initialState);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {value} = e.target;
    setFormData(e.target.name === 'review' ? {...formData, comment: value} : {...formData, rating: Number(value)});
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
        { RATINGS.map(({value, title}) => <RatingStar key={value} starsCount={value} starsCountMeaning={title} onChange={handleValueChange} />)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleValueChange}
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
                  Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
