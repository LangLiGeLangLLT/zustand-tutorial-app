import { useFoodStore } from '@/store/foodStore'

function FoodBox() {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore()

  return (
    <div className="box">
      <h1>FoodBox</h1>
      <p>fish:{fish}</p>
      <div className="flex gap-2">
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>
      </div>
    </div>
  )
}

export default FoodBox
