import './Select.scss';

import React from 'react';
import ReactSelect from 'react-select';

const Select = ({
  options,
  defaultValue,
  defaultInputValue,
  placeholder,
  onChange
}) => (
  <ReactSelect
    className="search__select select"
    classNamePrefix="select"
    onChange={onChange}
    options={options}
    placeholder={placeholder}
    defaultValue={defaultValue}
    defaultInputValue={defaultInputValue}
  />
);

export default Select;
