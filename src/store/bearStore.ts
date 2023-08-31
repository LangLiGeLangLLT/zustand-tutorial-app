import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type State = {
  bears: number
  color: string
  size: string
  increasePopulation: () => void
  removeAllBears: () => void
  reset: () => void
}

export const useBearStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        color: 'red',
        size: 'big',
        increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
        reset: () => {
          set({
            bears: 0,
            color: 'red',
            size: 'big',
          })
        },
      }),
      {
        name: 'bear store',
        storage: createJSONStorage(() => localStorage),
        // partialize: (state) => ({
        //   bears: state.bears,
        // }),
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !['size', 'color'].includes(key)
            )
          ),
      }
    ),
    {
      enabled: true,
      name: 'bear store',
    }
  )
)
