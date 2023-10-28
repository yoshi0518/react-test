import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: { hello: 'world' },
  reducers: {
    set: (_, { payload }) => payload,
  },
});

// ActionCreator
const { set } = user.actions;

export { set };
export default user.reducer;
