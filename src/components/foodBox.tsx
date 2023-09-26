import {
  addOneFish,
  removeAllFish,
  removeOneFish,
  useFoodStore,
} from '@/store/foodStore'

function FoodBox() {
  // const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore() // reactive

  const fish = useFoodStore((state) => state.fish) // reactive
  // const fish = useFoodStore.getState().fish // non-reactive

  const addFiveFish = () => {
    useFoodStore.setState((state) => ({
      fish: state.fish + 5,
    }))
  }

  return (
    <div className="box">
      <h1>FoodBox</h1>
      <p>fish:{fish}</p>
      <div className="flex gap-2">
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fish</button>
        <button onClick={addFiveFish}>add five fish</button>
      </div>
    </div>
  )
}

export default FoodBox
