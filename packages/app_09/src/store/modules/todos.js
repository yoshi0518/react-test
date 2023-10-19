import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      name: 'ブログを確認',
      completed: false,
    },
    {
      id: 2,
      name: 'メールの返信',
      completed: false,
    },
  ],
  reducers: {
    create: (state, { payload: todo }) => {
      console.log({ action: 'create', todo });
      state.push({
        id: state.length ? Math.max(...state.map((todo) => todo.id)) + 1 : 1,
        name: todo,
        completed: false,
      });
      return state;
    },
    toggle: (state, { payload: id }) => {
      console.log({ action: 'toggle', id });
      return state.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }));
    },
    remove: (state, { payload: id }) => {
      console.log({ action: 'remove', id });
      return state.filter((todo) => todo.id !== id);
    },
  },
});

// ActionCreater
const { create, toggle, remove } = todos.actions;

export { create, toggle, remove };
export default todos.reducer;
