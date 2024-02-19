import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";

const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  return (
    <div>
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterView;
