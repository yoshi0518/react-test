import { createSlice } from '@reduxjs/toolkit';
import { asyncCount } from '../../api/counter';

const count3 = createSlice({
  name: 'count3',
  initialState: 100,
  reducers: {
    add: (state, { type, payload }) => {
      console.log({ type, payload });
      return state + payload;
    },
    minus: (state, { type, payload }) => {
      console.log({ type, payload });
      return state - payload;
    },
  },
});

// ActionCreater
const { add, minus } = count3.actions;

// Middleware
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log({ state });
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};

// Middleware
const minusAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log({ state });
    const response = await asyncCount(payload);
    dispatch(minus(response.data));
  };
};

export { add, minus, addAsync, minusAsync };
export default count3.reducer;
