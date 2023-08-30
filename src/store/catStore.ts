import { createSelectors } from '@/utils/createSelectors'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Store = {
  cats: {
    bigCats: number
    smallCats: number
  }
  increaseBigCats: () => void
  increaseSmallCats: () => void
  summary: () => string
}

const useCatStoreBase = create<Store>()(
  immer((set, get) => ({
    cats: {
      bigCats: 0,
      smallCats: 0,
    },
    increaseBigCats: () => {
      set((state) => {
        state.cats.bigCats += 1
      })
    },
    increaseSmallCats: () => {
      set((state) => {
        state.cats.smallCats += 1
      })
    },
    summary: () => {
      const total = get().cats.bigCats + get().cats.smallCats
      return `There are ${total} cats in total.`
    },
  }))
)

export const useCatStore = createSelectors(useCatStoreBase)
