import {Link} from 'react-router-dom';
import {memo} from 'react';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks/index';
import {getUserData, getAuthorizationStatus} from '../../store/user-process-slice/selectors';
import {getFavoriteOffersData} from '../../store/favorite-process-slice/selectors';

function ProfileSignInNavigationTemplate(): JSX.Element {
  const currentUserData = useAppSelector(getUserData);
  const userEmail = currentUserData && currentUserData.email;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffersAmount = useAppSelector(getFavoriteOffersData).length;

  return (
    <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.Auth ? AppRoute.Favorites : AppRoute.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      {authorizationStatus === AuthorizationStatus.Auth ?
        (
          <>
            <span className="header__user-name user__name">{userEmail}</span>
            <span className="header__favorite-count">{favoriteOffersAmount}</span>
          </>) :
        <span className="header__login">Sign in</span>}
    </Link>
  );
}
const ProfileSignInNavigation = memo(ProfileSignInNavigationTemplate);
export default ProfileSignInNavigation;
