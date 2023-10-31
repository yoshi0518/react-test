import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

const useUserStore = create(
  devtools((set) => ({
    users: [],
    getUsers: async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log({ response });
      set({ users: response.data });
    },
    deleteUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  })),
);

export default useUserStore;
