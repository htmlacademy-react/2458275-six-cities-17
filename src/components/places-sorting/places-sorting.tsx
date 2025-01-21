import {SortingOption} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeSortingOption} from '../../store/app-process-slice/app-process-slice';
import {useState, useEffect, useRef} from 'react';
import {getCurrentSortingOption} from '../../store/app-process-slice/selectors';

function PlacesSorting():JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortingOption = useAppSelector(getCurrentSortingOption);

  const sortingRef = useRef<HTMLElement>(null);
  const [isSortingListOpened, setSortingListOpened] = useState(false);

  useEffect(() => {
    const hideSortingList = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortingRef.current && !sortingRef.current.contains(evt.target)) {
        setSortingListOpened(false);
      }
    };

    document.addEventListener('click', hideSortingList);

    return () => {
      document.removeEventListener('click', hideSortingList);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        ref={sortingRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setSortingListOpened((sortingListMode) => !sortingListMode)}
      >
        {currentSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortingListOpened ? 'places__options--opened' : ''}`}>
        {Object.values(SortingOption).map((sortingOption) =>
          (
            <li key={sortingOption}
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
