import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncCount } from '../../api/counter';

const count4 = createSlice({
  name: 'count4',
  initialState: {
    num: 200,
    status: '',
  },
  reducers: {
    add: (state, { type, payload }) => {
      console.log({ type, payload });
      return state.num + payload;
    },
    minus: (state, { type, payload }) => {
      console.log({ type, payload });
      return state.num - payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncWithStatus.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
        state.status = '取得済';
        state.count = state.count + action.payload;
      })
      .addCase(addAsyncWithStatus.rejected, (state) => {
        state.status = 'Error!!!';
      });
  },
});

// ActionCreater
const { add, minus } = count4.actions;

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

const addAsyncWithStatus = createAsyncThunk('counter/asyncCount', async (payload) => {
  const response = await asyncCount(payload);
  return response.data;
});

export { add, minus, addAsync, minusAsync, addAsyncWithStatus };
export default count4.reducer;
