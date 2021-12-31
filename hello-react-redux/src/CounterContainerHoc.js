import { connect } from "react-redux";
import CounterControlled from "./CounterControlled";
import { increment } from "./store/actions";
import { countSelector } from "./store/selectors";

function mapStateToProps(state) {
  return {
    count: countSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch(increment());
    },
  };
}

const hoc = connect(mapStateToProps, mapDispatchToProps);

export default hoc(CounterControlled);
