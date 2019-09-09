import './Footer.scss';

import React from 'react';
import classNames from 'classnames';

const Footer = ({ className = '' }) => (
  <footer className={classNames(className, 'footer')}>
    copyright @lodossteam 2018
  </footer>
);

export default Footer;
