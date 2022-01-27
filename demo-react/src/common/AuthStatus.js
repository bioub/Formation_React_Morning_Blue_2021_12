
import jwtDecode from "jwt-decode";

export function AuthStatus() {
  
  let payload = {};

  try {
    payload = jwtDecode(localStorage.getItem('token'));
  } catch {
    
  }

  if (!payload.username) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {payload.username} !
    </p>
  );
}
