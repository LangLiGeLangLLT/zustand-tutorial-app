'use client'

import { useBearStore } from '@/store/bearStore'
import { useFoodStore } from '@/store/foodStore'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { shallow } from 'zustand/shallow'

function BearBox() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  const reset = useBearStore((state) => state.reset)

  const [bgClass, setBgClass] = useState<string>('')

  useEffect(() => {
    // const unsubscribe = useFoodStore.subscribe((state, prevState) => {
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     setBgClass('bg-red-100')
    //   } else if (prevState.fish > 5 && state.fish <= 5) {
    //     setBgClass('bg-green-100')
    //   }
    // })

    // return () => {
    //   unsubscribe()
    // }

    const unsubscribe = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        if (prevFish === fish) {
          if (fish > 5) {
            setBgClass('bg-red-100')
          } else {
            setBgClass('bg-green-100')
          }
        }

        if (prevFish <= 5 && fish > 5) {
          setBgClass('bg-red-100')
        } else if (prevFish > 5 && fish <= 5) {
          setBgClass('bg-green-100')
        }
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    )

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className={twMerge('box', bgClass)}>
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
      <p>{Math.random()}</p>
      <div className="flex gap-2">
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bear</button>
        <button
          onClick={() => {
            reset()
            useBearStore.persist.clearStorage()
          }}
        >
          clear storage
        </button>
      </div>
    </div>
  )
}

export default BearBox
