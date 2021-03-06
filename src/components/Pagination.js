import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  font-size: 1.25em;
  margin-bottom: 1em;

  .icon {
    color: white;
    font-size: 1.5em;
    margin: 0 0.5em;
  }

  .numbers {
    color white;
  }

  .numbers a {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  .page-number {
    padding: 0 0.5em;
  }

  .selected {
    color: var(--yellow);
    font-weight: bold;
    //border: 1px solid var(--yellow);
  }
`;

class Pagination extends React.Component {
  renderPageList() {
    return [1, 2, 3, 4, 5].map(item => {
      let section = this.props.location.pathname.split('/')[1];
      if (section === 'toprated') {
        section = this.props.location.pathname
          .split('/')
          .slice(1, 3)
          .join('/');
      }
      return (
        <Link to={`/${section}/page-${item}`} key={item}>
          <span
            key={item}
            className={`page-number ${
              item === this.props.page ? 'selected' : ''
            }`}
          >
            {item}
          </span>
        </Link>
      );
    });
  }

  render() {
    let section = this.props.location.pathname.split('/')[1];
    if (section === 'toprated') {
      section = this.props.location.pathname
        .split('/')
        .slice(1, 3)
        .join('/');
    }
    return (
      <PageContainer>
        {this.props.page > 1 ? (
          <Link to={`/${section}/page-${this.props.page - 1}`}>
            <FontAwesomeIcon className="icon" icon={faLongArrowAltLeft} />
          </Link>
        ) : null}
        <div className="numbers">{this.renderPageList()}</div>
        {this.props.page < 5 ? (
          <Link to={`/${section}/page-${this.props.page + 1}`}>
            <FontAwesomeIcon className="icon" icon={faLongArrowAltRight} />
          </Link>
        ) : null}
      </PageContainer>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    page: state.page
  };
};

export default connect(mapStateToProps)(Pagination);
