import {SortingOption} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeSortingOption} from '../../store/action';

function PlacesSorting():JSX.Element {
  const currentSortingOption = useAppSelector((state) => state.currentSortingOption);
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortingOption).map((sortingOption) =>
          (<li
            key={sortingOption}
            className={`places__option ${sortingOption === currentSortingOption ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => dispatch(changeSortingOption(sortingOption))}
          >
            {sortingOption}
          </li>
          )
        )}
      </ul>
    </form>);
}

export default PlacesSorting;
