import { Link, Route, Routes } from "react-router-dom";
import DemoRedux from "./DemoRedux";
import Home from "./Home";
import UsersLists from "./UsersLists";
import UserDetails from "./UserDetails";

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/redux">Demo Redux</Link>{' '}
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/redux" element={<DemoRedux />}></Route>
        <Route path="/users" element={<UsersLists />}>
          <Route path=":userId" element={<UserDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
