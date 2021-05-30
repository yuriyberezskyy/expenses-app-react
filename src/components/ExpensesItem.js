import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

function ExpensesItem({ dispatch, id, description, amount, createdAt }) {
  return (
    <div>
      <ul>
        <li>{description}</li>
        <li>{amount}$</li>
        <li>{createdAt}</li>
      </ul>
      <button
        onClick={e => {
          dispatch(removeExpense({ id }));
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default connect()(ExpensesItem);
