import { createSelectors } from '@/utils/createSelectors'
import { StateCreator, create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'
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

const createCatSlice: StateCreator<
  Store,
  [
    ['zustand/immer', never],
    ['zustand/devtools', unknown],
    ['zustand/subscribeWithSelector', never],
    ['zustand/persist', unknown]
  ]
> = (set, get) => ({
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
})

const useCatStoreBase = create<Store>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(createCatSlice, {
          name: 'cat store',
        })
      ),
      {
        enabled: true,
        name: 'cat store',
      }
    )
  )
)

export const useCatStore = createSelectors(useCatStoreBase)
