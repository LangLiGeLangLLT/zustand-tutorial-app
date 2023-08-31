'use client'

import { useBearStore } from '@/store/bearStore'

function BearBox() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  const reset = useBearStore((state) => state.reset)

  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>bears: {bears}</p>
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
