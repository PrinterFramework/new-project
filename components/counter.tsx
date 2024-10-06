'use client'
import { decrement, increment, reset } from '@redux/slice/counter'
import { useDispatch, useSelector } from '@redux/store'

export function Counter() {
  const count = useSelector((state) => state.counter.data.value)
  const dispatch = useDispatch()

  return (
    <div className="demo-counter">
      <h2>Counter is at {count}</h2>

      <div className="buttons">
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
