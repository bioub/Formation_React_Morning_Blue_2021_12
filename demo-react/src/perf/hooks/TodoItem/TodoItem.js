import './TodoItem.css';

export default function TodoItem({ item, onDeleteItem }) {
  return (
    <div className="TodoItem">
      <span>{item.title}</span>
      <button role="button" onClick={() => onDeleteItem(item)}>-</button>
    </div>
  );
}
