
type FavoriteButtonProps = {
  isFavorite: boolean;
  buttonType: 'commonOfferButton' | 'activeOfferButton';
}

function FavoriteButton ({ isFavorite, buttonType}: FavoriteButtonProps): JSX.Element {

  const buttonClass = `button ${buttonType === 'activeOfferButton' ? 'offer__bookmark-button' : 'place-card__bookmark-button'} ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;
  return (
    <button className={buttonClass} type="button">
      <svg className={buttonType === 'activeOfferButton' ? 'offer__bookmark-icon' : 'place-card__bookmark-icon'} width={buttonType === 'activeOfferButton' ? 31 : 18} height={buttonType === 'activeOfferButton' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );
}

export default FavoriteButton;
