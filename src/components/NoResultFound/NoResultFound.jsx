import './NoResultFound.scss';
import GitHubLogo from '../../assets/img/github-logo.svg';

import React from 'react';

const NoResultFound = ({ className }) => (
  <main className={className}>
    <section className="container no-results">
      <div className="no-results__container">
        <img className="no-results__bg" src={GitHubLogo} alt="GitHub logo" />
        <div className="*no-results__desc">
          <p className="no-results__title">No results found</p>
          <p className="no-results__desc">
            select other parameters and try again
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default NoResultFound;
