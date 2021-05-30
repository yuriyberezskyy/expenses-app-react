export const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT',
    text
  };
};

// Sort_By_Date
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

// Sort_By_Amount
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

//Set_Start_Date
export const setStartDate = (date = undefined) => {
  return {
    type: 'SET_START_DATE',
    date
  };
};

//Set_End_Date
export const setEndDate = (date = undefined) => {
  return {
    type: 'SET_END_DATE',
    date
  };
};
