import { create } from 'zustand';

export const useHeaderStore = create((set) => ({
  sticky: true,
  setSticky: () => set(() => ({ sticky: true })),
  setUnSticky: () => set(() => ({ sticky: false })),
}));
