import '../components/NoResultFound/NoResultFound.scss';
import GitHubLogo from '../assets/img/github-logo.svg';

import React from 'react';

const NotFoundPage = ({ className = 'app__main' }) => (
  <main className={className}>
    <section className="container no-results">
      <div className="no-results__container">
        <img className="no-results__bg" src={GitHubLogo} alt="GitHub logo" />
        <div className="*no-results__desc">
          <p className="no-results__title">404</p>
          <p className="no-results__desc">Page not found</p>
        </div>
      </div>
    </section>
  </main>
);

export default NotFoundPage;
