import {Link} from 'react-router-dom';
import { useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';

function ProfileSignOutNavigation (): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogoutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link"
        to="#"
        onClick={handleLogoutClick}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}
export default ProfileSignOutNavigation;
