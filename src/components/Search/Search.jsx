import './Search.scss';

import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import getJSON from '../../api/getJSON';
import Select from '../Select/Select';
import Button from '../Button/Button';
import { updateSearchList } from '../../store/actions';

const Search = ({ className = '', updateResultSearch }) => {
  const [type, setType] = useState('Repositories');
  const [lang, setLang] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleClickSearch = useCallback(async () => {
    const { data } = await getJSON(type, searchValue, lang);
    updateResultSearch(data.items);
  }, [type, lang, searchValue]);

  const handleChangeType = useCallback(data => setType(data.value), []);
  const handleChangeLang = useCallback(data => setLang(data.value), []);
  const handleChangeSearchValue = useCallback(
    e => setSearchValue(e.target.value),
    []
  );
  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 13 && !isDisableSearch) {
        handleClickSearch();
      }
    },
    [type, lang, searchValue]
  );

  const isDisableSearch = type === '' || lang === '' || searchValue === '';

  return (
    <section className={classNames(className, 'search')}>
      <div className="search__item">
        <Select
          options={[{ value: 'Repositories', label: 'Repositories' }]}
          value={type}
          onChange={handleChangeType}
          defaultInputValue={type}
          placeholder="Type"
        />
      </div>
      <div className="search__item">
        <Select
          options={[
            { value: 'Javascript', label: 'Javascript' },
            { value: 'CSS', label: 'CSS' },
            { value: 'HTML', label: 'HTML' },
            { value: 'PHP', label: 'PHP' },
            { value: 'Ruby', label: 'Ruby' },
            { value: 'C++', label: 'C++' },
            { value: 'Python', label: 'Python' },
            { value: 'C#', label: 'C#' },
            { value: 'Java', label: 'Java' },
            { value: 'Go', label: 'Go' },
            { value: 'Haskel', label: 'Haskel' }
          ]}
          onChange={handleChangeLang}
          defaultInputValue={lang}
          placeholder="Language"
        />
      </div>
      <div className="search__item">
        <input
          className="search__input"
          type="text"
          value={searchValue}
          onChange={handleChangeSearchValue}
          onKeyDown={handleKeyDown}
          placeholder="Type here for search"
          autoComplete="off"
        />
      </div>
      <Button
        className="search__submit btn btn_brand"
        disabled={isDisableSearch}
        onClick={handleClickSearch}
      >
        search
      </Button>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  updateResultSearch: array => dispatch(updateSearchList(array))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
