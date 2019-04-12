import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';

import { setPageNumber, setPreviousPage, setNextPage } from '../actions';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  font-size: 1.5em;
  margin-bottom: 1em;

  .icon {
    color: white;
  }

  .numbers {
    color white;
  }

  .page-number {
    padding: 0 0.5em;
  }

  .selected {
    color: var(--yellow);
  }
`;

class Pagination extends React.Component {
  handleClick = e => {
    this.props.setPageNumber(Number(e.target.innerText));
  };

  renderPageList() {
    return [1, 2, 3, 4, 5].map(item => (
      <span
        key={item}
        className={`page-number ${item === this.props.page ? 'selected' : ''}`}
      >
        {item}
      </span>
    ));
  }

  render() {
    return (
      <PageContainer>
        {this.props.page > 1 ? (
          <FontAwesomeIcon
            className="icon"
            icon={faLongArrowAltLeft}
            onClick={this.props.setPreviousPage}
          />
        ) : null}
        <div className="numbers" onClick={this.handleClick}>
          {this.renderPageList()}
        </div>
        {this.props.page < 5 ? (
          <FontAwesomeIcon
            className="icon"
            icon={faLongArrowAltRight}
            onClick={this.props.setNextPage}
          />
        ) : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page
  };
};

export default connect(
  mapStateToProps,
  {
    setPageNumber,
    setPreviousPage,
    setNextPage
  }
)(Pagination);
