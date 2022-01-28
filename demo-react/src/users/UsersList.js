import { useEffect } from "react";
import { Link } from "react-router-dom";

export function UsersList({ onMount = () => {}, loading = false, items = [] }) {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return <div className="UsersList">
   {loading && <div>Loading...</div>}
   {!loading && items.map((item) => <div key={item.id}><Link to={String(item.id)}>{item.username}</Link></div>)}
   <div>
     <Link to="add">Ajouter</Link>
   </div>
  </div>;
}