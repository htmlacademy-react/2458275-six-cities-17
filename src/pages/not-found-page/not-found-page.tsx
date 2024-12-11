import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

function NotFoundPage(): JSX.Element{
  return (
    <Fragment>
      <Helmet>
        <title>6 cities: Not Found</title>
      </Helmet>
      <h1>
              404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </Fragment>
  );
}
export default NotFoundPage;
