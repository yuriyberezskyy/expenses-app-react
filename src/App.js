import React from 'react';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
// import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expensesReducer, state.filterReducer));
});

const oneExpense = store.dispatch(
  addExpense({ description: 'Water Bill', amount: 200, createdAt: 1000 })
);

const secondExpense = store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 100, createdAt: 4000 })
);

const thirdExpense = store.dispatch(
  addExpense({ description: 'Rent Bill', amount: 300, createdAt: 3000 })
);

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
