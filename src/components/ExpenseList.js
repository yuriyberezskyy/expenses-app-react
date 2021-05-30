import React from 'react';
import { connect } from 'react-redux';
import ExpensesItem from './ExpensesItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map(expense => (
        <ExpensesItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expensesReducer, state.filterReducer)
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
