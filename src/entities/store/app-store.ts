import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type AppStateType = {
  isBurger: boolean;
  isAuth: boolean;
  isAppError: boolean;
};

export type AppActions = {
  setBurger: (value: boolean) => void;
  setAuth: (value: boolean) => void;
  setAppError: () => void;
};

// export type CounterStore = CounterState & CounterActions;
export type AppStore = AppActions & AppStateType;
export const initAppStore = (): AppStateType => {
  return { isBurger: false, isAppError: false, isAuth: false };
};
export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      isBurger: false,
      isAppError: false,
      isAuth: false,
      // addABear: () => set({ bears: get().bears + 1 }),
      setBurger: (value: boolean) => {
        return set({ isBurger: value });
      },
      setAuth: (value: boolean) => {
        return set({ isAuth: value });
      },
      setAppError: () =>
        set({ isAppError: (get().isAppError = !get().isAppError) }),
    }),
    {
      name: 'app-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      //   skipHydration: true,
    }
  )
);