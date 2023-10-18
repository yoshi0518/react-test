import { createSlice } from '@reduxjs/toolkit';

const count2 = createSlice({
  name: 'count2',
  initialState: {
    num: 10,
  },
  reducers: {
    add: (state, { type, payload }) => {
      console.log({ type, payload });
      // return { num: state.num + payload };
      state.num = state.num + payload;
      // 本来は純粋関数として記載(Objectを新たに追加、編集後に返却すべきだが、ReduxToolkit内はイミュータブルな記載をしてもOK)
    },
    minus: (state, { payload }) => {
      // console.log({ type, payload });
      // return { num: state.num - payload };
      state.num = state.num - payload;
    },
  },
});

// ActionCreater
const { add, minus } = count2.actions;

export { add, minus };
export default count2.reducer;
