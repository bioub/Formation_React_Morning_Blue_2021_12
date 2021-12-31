import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/actions";
import { countSelector } from "./store/selectors";

function CounterHook() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  function onIncrement() {
    dispatch(increment());
  }

  return (
    <button className="CounterHook" onClick={() => onIncrement(count + 1)}>
      {count}
    </button>
  );
}

export default CounterHook;
