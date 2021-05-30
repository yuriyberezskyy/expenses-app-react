import React from 'react';
import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return { type: 'DECREMENT', decrementBy };
};

const setCount = ({ count }) => {
  return { type: 'SET', count };
};

const resetCount = () => {
  return { type: 'RESET' };
};

// Reducer
// 1. Reducers are pure functions
// 2. Never change state or actions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };

    case 'DECREMENT':
      return { count: state.count - action.decrementBy };

    case 'SET':
      return { count: action.count };

    case 'RESET':
      return { count: 0 };

    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

const PlayRedux = () => {
  return <div>Hello</div>;
};

export default PlayRedux;
