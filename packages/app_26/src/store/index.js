import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

const useCountStore = create(
  persist(
    (set, get) => ({
      count: 100,
      increment: (num) => set((state) => ({ count: state.count + num })),
      // decrement: () => set((state) => ({ count: state.count - 1 })),
      decrement: () => set({ count: get().count - 1 }),
      reset: () => set({ count: 0 }),
    }),
    { name: 'count-storage' },
  ),
);

export default useCountStore;
