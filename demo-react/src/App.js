import React, { lazy, Suspense } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { ExportExcel } from './common/ExportExcel';
import { Home } from './common/Home';
import { Layout } from './common/Layout';
import NetworkErrorBoundary from './common/NetworkErrorBoundary';
import { RequireAuth } from './common/RequireAuth';
// import Todos from './perf/hooks/Todos/Todos';
import Login from './users/Login';
import { Users } from './users/Users';

function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

// const Todos = lazy(() => retry(() => import('./perf/hooks/Todos/Todos')));
const Todos = lazy(() => import('./perf/hooks/Todos/Todos'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={
              <NetworkErrorBoundary>
                {() => (
                  <Suspense fallback={<div>Loading...</div>}>
                    {React.createElement(React.lazy(() => import('./perf/hooks/Todos/Todos')))}
                  </Suspense>
                )}
              </NetworkErrorBoundary>
            }
          />
          <Route path="/export-excel" element={<ExportExcel />} />
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
