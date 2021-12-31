import { useState } from "react";
import Clock from "./Clock";
import CounterContainerHoc from "./CounterContainerHoc";
import CounterContainerHook from "./CounterContainerHook";
import CounterControlled from "./CounterControlled";
import CounterHook from "./CounterHook";
import CounterUncontrolled from "./CounterUncontrolled";
import Hello from "./Hello";
import RegistrationForm from "./RegistrationForm";
import Select from "./Select";

function App() {
  const [count, setCount] = useState(0);
  const [prenom, setPrenom] = useState('Romain');

  return (
    <div className="App">
      <Hello name={prenom} /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock />
      <CounterUncontrolled />
      <CounterUncontrolled />
      <CounterControlled count={count} onIncrement={setCount} />
      <CounterControlled count={count} onIncrement={setCount} />
      <h2>CounterContainerHoc</h2>
      <CounterContainerHoc />
      <CounterContainerHoc />
      <h2>CounterContainerHook</h2>
      <CounterContainerHook />
      <CounterContainerHook />
      <h2>CounterHook</h2>
      <CounterHook />
      <CounterHook />
      <RegistrationForm />
      <Select items={["Jean", "Romain", "Antonin"]} selected={prenom} onSelected={setPrenom} />
    </div>
  );
}

export default App;
