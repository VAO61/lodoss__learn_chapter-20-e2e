import './Button.scss';

import React from 'react';
import classNames from 'classnames';

const Button = ({
  className = '',
  type = 'brand',
  disabled = false,
  children,
  onClick = () => {}
}) => (
  <button
    className={classNames('btn', 'btn_' + type, className)}
    type={'button'}
    onClick={onClick} // addOrRemoveRepo(item)
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
