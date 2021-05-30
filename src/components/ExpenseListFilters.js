import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

export const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      ></input>
      <select
        value={props.filters.sortBy}
        onChange={e => {
          if (e.target.value === 'date') {
            props.dispatch(sortByDate());
          } else if (e.target.value === 'amount') {
            props.dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

// ExpenseListFilters.propTypes = {
//   props: PropTypes
// };

const mapStateToProps = state => ({
  filters: state.filterReducer
});

export default connect(mapStateToProps)(ExpenseListFilters);
