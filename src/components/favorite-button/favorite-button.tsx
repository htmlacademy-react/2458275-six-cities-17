import {FavouriteButtonType} from '../../consts';

type FavoriteButtonProps = {
  isFavorite: boolean;
  buttonType: FavouriteButtonType;
}

function FavoriteButton ({ isFavorite, buttonType}: FavoriteButtonProps): JSX.Element {

  const buttonClass = `button ${buttonType === FavouriteButtonType.FullOfferButton ? 'offer__bookmark-button' : 'place-card__bookmark-button'} ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;
  const bookmarkClass = buttonType === FavouriteButtonType.FullOfferButton ? 'offer__bookmark-icon' : 'place-card__bookmark-icon';
  const bookmarkWidth = buttonType === FavouriteButtonType.FullOfferButton ? 31 : 18;
  const bookmarkHeight = buttonType === FavouriteButtonType.FullOfferButton ? 33 : 19;

  return (
    <button className={buttonClass} type="button">
      <svg className={bookmarkClass} width={bookmarkWidth} height={bookmarkHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );
}

export default FavoriteButton;
