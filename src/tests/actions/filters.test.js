import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: 'SET_END_DATE', date: moment(0) });
});

test('should set text filter for object', () => {
  const action = setTextFilter('data');
  expect(action).toEqual({ type: 'SET_TEXT', text: 'data' });
});

test('should set text filter with default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: 'SET_TEXT', text: '' });
});

test('should sort by date the object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
