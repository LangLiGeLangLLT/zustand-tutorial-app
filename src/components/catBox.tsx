'use client'

import { useCatStore } from '@/store/catStore'

function CatBox() {
  const bigCats = useCatStore((state) => state.cats.bigCats)
  const smallCats = useCatStore((state) => state.cats.smallCats)
  const increaseBigCats = useCatStore((state) => state.increaseBigCats)
  const increaseSmallCats = useCatStore((state) => state.increaseSmallCats)
  const summary = useCatStore((state) => state.summary)

  return (
    <div className="box">
      <h1>CatBox</h1>
      <p>big cats: {bigCats}</p>
      <p>small cats: {smallCats}</p>
      <p>summary: {summary()}</p>
      <div className="flex gap-2">
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  )
}

export default CatBox
