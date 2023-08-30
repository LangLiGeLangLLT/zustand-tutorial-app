import BearBox from '@/components/bearBox'
import CatBox from '@/components/catBox'

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen p-10">
      <h1 className="mb-5 flex justify-center">Zustand Tutorial</h1>
      <div className="flex flex-col -m-2">
        <div className="p-2">
          <BearBox />
        </div>
        <div className="p-2">
          <CatBox />
        </div>
      </div>
    </div>
  )
}
