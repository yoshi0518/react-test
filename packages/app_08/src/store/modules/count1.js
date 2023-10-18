import { createSlice } from '@reduxjs/toolkit';

const count1 = createSlice({
  name: 'count1',
  initialState: 0,
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
const { add, minus } = count1.actions;

export { add, minus };
export default count1.reducer;
