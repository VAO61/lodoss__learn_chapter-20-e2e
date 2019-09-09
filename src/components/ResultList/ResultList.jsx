import './ResultList.scss';

import React from 'react';

import Result from '../Result/Result';
import ResultTile from '../ResultTile/ResultTile';

const ResultList = ({ className = '', list, theme }) => {
  return (
    <main className={className}>
      <section className="result-list">
        {list.map(item =>
          theme === 'list' ? (
            <Result className="result-list__result" key={item.id} item={item} />
          ) : (
            <ResultTile
              className={'result-list__result'}
              key={item.id}
              item={item}
            />
          )
        )}
      </section>
    </main>
  );
};

export default ResultList;
