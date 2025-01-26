import {Link} from 'react-router-dom';
import {useCallback} from 'react';
import {useAppDispatch} from '../../hooks/index';
import {getRandomCity} from '../../utils/common';
import {changeCity} from '../../store/app-process-slice/app-process-slice';
import {AppRoute} from '../../consts';

function RandomCityLink(): JSX.Element {

  const randomCity = getRandomCity();
  const dispatch = useAppDispatch();

  const handleCityClick = () => {
    dispatch(changeCity(randomCity));
  };

  return(
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" onClick={handleCityClick} to={AppRoute.Main}>
          <span>{randomCity.name}</span>
        </Link>
      </div>
    </section>
  );
}

export default RandomCityLink;
