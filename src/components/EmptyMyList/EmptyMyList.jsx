import '../NoResultFound/NoResultFound.scss';
import GitHubLogo from '../../assets/img/github-logo.svg';

import React from 'react';
import { Link } from 'react-router-dom';

const EmptyMyList = ({ className }) => (
  <main className={className}>
    <section className="container no-results">
      <div className="no-results__container">
        <img className="no-results__bg" src={GitHubLogo} alt="GitHub logo" />
        <div className="*no-results__desc">
          <p className="no-results__title">Favorites list is empty</p>
          <p className="no-results__desc">
            <Link className="link" to="/search">
              Choose
            </Link>
            &nbsp;any repo and try again
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default EmptyMyList;
