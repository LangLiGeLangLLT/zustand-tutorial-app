'use client'

import { useCatStore } from '@/store/catStore'

function CatBox2() {
  const bigCats = useCatStore((state) => state.cats.bigCats)

  return (
    <div className="box">
      <h1>CatBox2</h1>
      <p>big cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  )
}

export default CatBox2
