import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { fetchUsersThunk } from "./store/actions";
import { usersSelector } from "./store/selectors";

function UsersLists() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <div className="UsersLists">
      {users.loading && <div>Loading...</div>}
      {users.items.map((it) => <div key={it.id}><Link to={'/users/' + it.id}>{it.name}</Link></div>)}
      <Outlet />
    </div>
  );
}

export default UsersLists;
