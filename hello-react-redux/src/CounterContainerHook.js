import { useDispatch, useSelector } from "react-redux";
import CounterControlled from "./CounterControlled";
import { increment } from "./store/actions";
import { countSelector } from "./store/selectors";

function CounterContainerHook() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  function onIncrement() {
    dispatch(increment());
  }

  return (
    <CounterControlled count={count} onIncrement={onIncrement} />
  )
}

export default CounterContainerHook;
