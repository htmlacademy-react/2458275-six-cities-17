import {memo, useCallback, MouseEvent} from 'react';
import {changeCity} from '../../store/app-process-slice/app-process-slice';
import {useAppDispatch} from '../../hooks/index';
import {OfferCity} from '../../types/offers-types';

type LocationTabProps = {
  city: OfferCity;
  isTabActive: boolean;
}

function LocationTabTemplate({city, isTabActive}: LocationTabProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onTabClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  }, [city, dispatch]);

  return (
    <li key={city.name} className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isTabActive && 'tabs__item--active'}`}
        href="#"
        onClick={onTabClick}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

const LocationTab = memo(LocationTabTemplate);
export default LocationTab;
