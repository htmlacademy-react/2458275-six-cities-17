import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks/index';
import {getUserData} from '../../store/user-process-slice/selectors';

type ProfileSignInNavigationProps = {
  authorizationStatus: AuthorizationStatus;
}
function ProfileSignInNavigation({authorizationStatus}: ProfileSignInNavigationProps): JSX.Element {
  const currentUserData = useAppSelector(getUserData);
  const userEmail = currentUserData && currentUserData.email;

  return (
    <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.Auth ? AppRoute.Favorites : AppRoute.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      {authorizationStatus === AuthorizationStatus.Auth ?
        (
          <>
            <span className="header__user-name user__name">{userEmail}</span>
            <span className="header__favorite-count">3</span>
          </>) :
        <span className="header__login">Sign in</span>}
    </Link>
  );
}

export default ProfileSignInNavigation;
