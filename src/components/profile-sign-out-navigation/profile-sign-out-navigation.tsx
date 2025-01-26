import {Link, useLocation, useNavigate} from 'react-router-dom';
import {memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {getAuthorizationStatus} from '../../store/user-process-slice/selectors';

function ProfileSignOutNavigationTemplate(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const favoritePageUrl : string = AppRoute.Favorites;
  const isFavoritePage = pathname === favoritePageUrl;
  const isAuthorized = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logoutAction()).then(() => {
      if (isAuthorized && isFavoritePage) {
        navigate(AppRoute.Login);
      } else {
        navigate(pathname);
      }
    });
  };
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link"
        to={AppRoute.Login}
        onClick={handleLogoutClick}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}
const ProfileSignOutNavigation = memo(ProfileSignOutNavigationTemplate);
export default ProfileSignOutNavigation;
