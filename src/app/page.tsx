'use client'

import FoodBox from '@/components/foodBox'
import dynamic from 'next/dynamic'

const BearBox = dynamic(() => import('@/components/bearBox'), {
  ssr: false,
})
const CatBox = dynamic(() => import('@/components/catBox'), { ssr: false })
const CatBox2 = dynamic(() => import('@/components/catBox2'), { ssr: false })
const CatController = dynamic(() => import('@/components/catController'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen p-10">
      <h1 className="mb-5 flex justify-center">Zustand Tutorial</h1>
      <div className="flex flex-col gap-2">
        <BearBox />
        <CatBox />
        <CatBox2 />
        <CatController />
        <FoodBox />
      </div>
    </div>
  )
}
