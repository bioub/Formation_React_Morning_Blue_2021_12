import { Route, Routes } from "react-router-dom";
import { UserAdd } from "./UserAdd";
import { UserShow } from "./UserShow";
import { UsersListContainer } from "./UsersListContainer";

export function Users() {
  return <div className="Users">
    <UsersListContainer />
    <Routes>
      <Route path="/add" element={<UserAdd />} />
      <Route path="/:id" element={<UserShow />} />
    </Routes>
  </div>;
}