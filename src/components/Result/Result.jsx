import './Result.scss';
import IconStar from '../../assets/img/icon-star.svg';

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Checkbox from '../Checkbox/Checkbox';
import { addToMyList, removeFromMyList } from '../../store/actions';

const Result = ({
  className,
  item,
  isExists,
  addToMyList,
  removeFromMyList
}) => (
  <div className={classNames(className, 'result')} key={item.id} id={item.id}>
    <div className="result__add-remove">
      <Checkbox
        active={isExists}
        onClick={isExists ? removeFromMyList(item.id) : addToMyList(item)}
      />
    </div>
    <div className="result__main">
      <p className="result__title">
        <a
          href={item.html_url}
          className="lnk result__link"
          key={`${item.id}_link`}
        >
          {item.full_name}
        </a>
      </p>
      <p className="result__desc" key={`${item.id}_desc`}>
        {item.description}
      </p>
      <div className="result__tags">
        {item.topics &&
          item.topics.map(tag => (
            <span className="result__tag" key={`${item.id}_tag_${tag}`}>
              {tag}
            </span>
          ))}
      </div>
    </div>
    <div className="result__details result-details">
      <p className="result-details__language" key={`${item.id}_lang`}>
        {item.language}
      </p>
      <div className="result-details__stars-container">
        <img className="result-details__icon" src={IconStar} alt="icon star" />
        <p className="result-details__count" key={`${item.id}_stars`}>
          {item.stargazers_count}
        </p>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  isExists: !!state.myList.find(item => item.id === props.item.id)
});

const mapDispatchToProps = dispatch => ({
  addToMyList: item => () => dispatch(addToMyList(item)),
  removeFromMyList: id => () => dispatch(removeFromMyList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
