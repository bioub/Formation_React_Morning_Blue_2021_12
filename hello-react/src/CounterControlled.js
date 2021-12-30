function CounterControlled({ count = 0, onIncrement = () => {} }) {
  return (
    <button className="CounterControlled" onClick={() => onIncrement(count + 1)}>
      {count}
    </button>
  );
}

export default CounterControlled;
