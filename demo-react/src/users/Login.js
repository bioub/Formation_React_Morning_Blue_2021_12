import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postLogin } from "./api";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await postLogin(credentials);

    navigate(from, { replace: true });
  }

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <div>
        Username : <input type="text" name="username" value={credentials.username} onChange={handleChange} />
      </div>
      <div>
        Password : <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

export default Login;
