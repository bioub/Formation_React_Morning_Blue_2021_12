
import { Navigate, useLocation } from "react-router-dom";
import jwtDecode from 'jwt-decode'

export function RequireAuth({ children }) {
  const location = useLocation();
  let payload = {};

  try {
    payload = jwtDecode(localStorage.getItem('token'));
  } catch {
    
  }

  if (!payload?.username) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}