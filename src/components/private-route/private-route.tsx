import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks/index';

type PrivateRouteProps = {
  children: JSX.Element;
}
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
