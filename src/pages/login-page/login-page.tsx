import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import LoginForm from '../../components/login-form/login-form';
import {LogoType, AuthorizationStatus, AppRoute} from '../../consts';
import {getAuthorizationStatus} from '../../store/user-process-slice/selectors';
import {useAppSelector} from '../../hooks/index';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const currentAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  if (currentAuthorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo logoType={LogoType.Header}/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
