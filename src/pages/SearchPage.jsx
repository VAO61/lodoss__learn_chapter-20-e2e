import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import NoResultFound from '../components/NoResultFound/NoResultFound';
import ResultListControl from '../components/ResultListControl/ResultListControl';
import ResultList from '../components/ResultList/ResultList';

const SearchPage = ({ searchList, theme }) => (
  <Fragment>
    <Search className="container" />
    {searchList.length === 0 ? (
      <NoResultFound className="app__main container" />
    ) : (
      <Fragment>
        <ResultListControl className="result-list__control container" />{' '}
        <ResultList
          className="app__main container"
          list={searchList}
          theme={theme}
        />
      </Fragment>
    )}
  </Fragment>
);

const mapStateToProps = state => ({
  searchList: state.searchList.slice(0, 6),
  theme: state.theme
});

export default connect(mapStateToProps)(SearchPage);
