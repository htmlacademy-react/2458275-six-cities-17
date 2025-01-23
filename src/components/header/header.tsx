import Logo from '../../components/logo/logo';
import ProfileSignOutNavigation from '../profile-sign-out-navigation/profile-sign-out-navigation';
import ProfileSignInNavigation from '../profile-sign-in-navigation/profile-sign-in-navigation';
import {AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process-slice/selectors';

function Header(): JSX.Element {
  const currentAuthorizationStatus = useAppSelector(getAuthorizationStatus);

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
                {<ProfileSignInNavigation />}
              </li>
              {currentAuthorizationStatus === AuthorizationStatus.Auth && <ProfileSignOutNavigation/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
