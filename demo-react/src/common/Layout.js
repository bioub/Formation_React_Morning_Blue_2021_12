import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "./AuthStatus";

export function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}