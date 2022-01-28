import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersFetch } from "./actions";
import { UsersList } from "./UsersList";

export function UsersListContainer() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const items = useSelector((state) => state.users.items);

  const handleMount = useCallback(() => dispatch(usersFetch()), [dispatch]);
  
  return <UsersList onMount={handleMount} loading={loading} items={items} />
}