import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

type Store = {
  fish: number
  addOneFish: () => void
  removeOneFish: () => void
  removeAllFish: () => void
}

export const useFoodStore = create<Store>()(
  subscribeWithSelector((set) => ({
    fish: 0,
    addOneFish: () => {
      set((state) => ({ fish: state.fish + 1 }))
    },
    removeOneFish: () => {
      set((state) => ({ fish: state.fish - 1 }))
    },
    removeAllFish: () => {
      set({ fish: 0 })
    },
  }))
)