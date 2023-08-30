import { useCatStore } from '@/store/catStore'
import React from 'react'

function CatController() {
  const increaseBigCats = useCatStore.use.increaseBigCats()
  const increaseSmallCats = useCatStore.use.increaseSmallCats()

  return (
    <div className="box">
      <h1>Cat Controller</h1>
      <p>{Math.random()}</p>
      <div className="flex gap-2">
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}

export default CatController
