import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3003/todos';

const todoApi = {
  getAll: async () => {
    const response = await axios.get(ENDPOINT_URL);
    return response.data;
  },
  create: async (name) => {
    const todos = await (await axios.get(ENDPOINT_URL)).data;
    const id = todos.length ? Math.max(todos.map((todo) => todo.id)) + 1 : 1;
    const response = await axios.post(ENDPOINT_URL, { id, name, completed: false });
    return response.data;
  },
  update: async (todo) => {
    const response = await axios.put(`${ENDPOINT_URL}/${todo.id}`, todo);
    return response.data;
  },
  remove: async (todo) => {
    const response = await axios.delete(`${ENDPOINT_URL}/${todo.id}`);
    return response.data;
  },
};

export default todoApi;
