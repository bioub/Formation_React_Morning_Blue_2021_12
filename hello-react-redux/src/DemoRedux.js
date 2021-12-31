import CounterContainerHoc from "./CounterContainerHoc";
import CounterContainerHook from "./CounterContainerHook";
import CounterHook from "./CounterHook";

function DemoRedux() {
  return (
    <div className="DemoRedux">
      <h2>CounterContainerHoc</h2>
      <CounterContainerHoc />
      <CounterContainerHoc />
      <h2>CounterContainerHook</h2>
      <CounterContainerHook />
      <CounterContainerHook />
      <h2>CounterHook</h2>
      <CounterHook />
      <CounterHook />
    </div>
  );
}

export default DemoRedux;
