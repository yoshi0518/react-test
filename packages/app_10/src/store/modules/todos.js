import { createSlice } from '@reduxjs/toolkit';

import todoApi from '../../api/todos';

const todos = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    updateData: (_, { payload }) => payload,
  },
});

// ActionCreater
const { updateData } = todos.actions;

// AcyncMiddleware
const getData = () => {
  return async (dispatch) => {
    const response = await todoApi.getAll();
    dispatch(updateData(response));
  };
};

export { updateData, getData };
export default todos.reducer;
