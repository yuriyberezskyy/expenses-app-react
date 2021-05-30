import React from 'react';
import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

//EXPENSE REDUCER
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//Set_Text_Filter
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT',
    text
  };
};

// Sort_By_Date
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

// Sort_By_Amount
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

//Set_Start_Date
const setStartDate = (date = undefined) => {
  return {
    type: 'SET_START_DATE',
    date
  };
};

//Set_End_Date
const setEndDate = (date = undefined) => {
  return {
    type: 'SET_END_DATE',
    date
  };
};

//FILTER REDUCER
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Store Creation
const store = createStore(
  combineReducers({
    expensesReducer,
    filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(
    state.expensesReducer,
    state.filterReducer
  );
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 10, createdAt: -2000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(134));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: 'ddasdasdasd',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filter: {
    text: 'rent',
    sortBy: 'amout', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const ReduxEx = () => {
  return <div>Hello</div>;
};

export default ReduxEx;
