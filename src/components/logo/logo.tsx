import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, LogoType} from '../../consts';

type LogoTemplateProps = {
  logoType: LogoType;
}
function LogoTemplate({logoType}: LogoTemplateProps): JSX.Element {
  const logoWidth = logoType === LogoType.Header ? '81' : '64';
  const logoHeight = logoType === LogoType.Header ? '41' : '33';
  return (
    <Link className={`${logoType}__logo-link`} to={AppRoute.Main}>
      <img
        className={`${logoType}`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={logoWidth}
        height={logoHeight}
      />
    </Link>
  );
}
const Logo = memo(LogoTemplate);
export default Logo;
