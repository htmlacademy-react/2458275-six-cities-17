import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const currentAuthorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentUserData = useAppSelector((state) => state.userData);
  const userEmail = currentUserData ? currentUserData.email : '';

  const dispatch = useAppDispatch();

  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={currentAuthorizationStatus === AuthorizationStatus.Auth ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {currentAuthorizationStatus === AuthorizationStatus.Auth ?
                    (
                      <>
                        <span className="header__user-name user__name">{userEmail}</span>
                        <span className="header__favorite-count">3</span>
                      </>) :
                    <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {currentAuthorizationStatus === AuthorizationStatus.Auth ? (
                <li className="header__nav-item">
                  <Link className="header__nav-link"
                    to="#"
                    onClick={handleLogoutClick}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              ) : ''}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
