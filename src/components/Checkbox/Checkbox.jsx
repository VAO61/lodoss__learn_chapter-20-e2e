import './Checkbox.scss';

import React from 'react';
import classNames from 'classnames';

const Checkbox = ({ active = false, onClick = () => {} }) => (
  <button
    className={classNames('btn', 'checkbox', active ? 'checkbox_active' : '')}
    type="button"
    onClick={onClick} // addOrRemoveRepo(item)
  />
);

export default Checkbox;
