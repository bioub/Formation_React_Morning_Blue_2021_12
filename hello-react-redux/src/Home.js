import { useState } from "react";
import Clock from "./Clock";
import CounterControlled from "./CounterControlled";
import CounterUncontrolled from "./CounterUncontrolled";
import Hello from "./Hello";
import RegistrationForm from "./RegistrationForm";
import Select from "./Select";

function Home() {

  const [count, setCount] = useState(0);
  const [prenom, setPrenom] = useState('Romain');

  return (
    <div className="Home">
      <Hello name={prenom} /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock />
      <CounterUncontrolled />
      <CounterUncontrolled />
      <CounterControlled count={count} onIncrement={setCount} />
      <CounterControlled count={count} onIncrement={setCount} />

      <RegistrationForm />
      <Select items={["Jean", "Romain", "Antonin"]} selected={prenom} onSelected={setPrenom} />

    </div>
  );
}

export default Home;
