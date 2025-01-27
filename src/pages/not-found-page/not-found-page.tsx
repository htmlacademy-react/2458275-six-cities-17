import styles from './not-found.module.css';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../consts';

function NotFoundPage(): JSX.Element{
  return (
    <section>
      <Helmet>
        <title>6 cities: Not Found</title>
      </Helmet>
      <div className={styles.error__container}>
        Oops!<br/>
        <span className={styles.error__code}>404</span> <br/>
        Sorry, couldn&apos;t find what you&apos;re looking for
        <Link to={AppRoute.Main} className={styles.error__returnLink}>Go to main page</Link>
      </div>
    </section>
  );
}
export default NotFoundPage;
