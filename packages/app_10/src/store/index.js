import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './modules/todos';
import openMeteoReducer from './modules/openMeteo';

export default configureStore({
  reducer: {
    todos: todosReducer,
    openMeteo: openMeteoReducer,
  },
});
