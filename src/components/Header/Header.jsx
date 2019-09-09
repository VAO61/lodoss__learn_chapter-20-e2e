import './Header.scss';
import GitHubSearchLogo from '../../assets/img/github-search-logo.svg';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Header = ({ className = '' }) => (
  /**
   * TODO: Utility 'classNames' usage
   * https://github.com/JedWatson/classnames
   */
  <header className={classNames(className, 'header')}>
    <Link to="/search" className="link">
      <img className="header__logo" alt="header logo" src={GitHubSearchLogo} />
    </Link>
    <div className="header__item header__control">
      <NavLink to="/search" className="link link_tdn header__link">
        Search
      </NavLink>
      <NavLink to="/my-list" className="link link_tdn header__link">
        My list
      </NavLink>
    </div>
  </header>
);

export default Header;
