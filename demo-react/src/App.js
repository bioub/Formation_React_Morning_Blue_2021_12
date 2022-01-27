import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './common/Home';
import { Layout } from './common/Layout';
import { RequireAuth } from './common/RequireAuth';
import Login from './users/Login';
import { Users } from './users/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users/*"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
