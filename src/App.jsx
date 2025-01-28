import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '@context/AuthContext';
import { PrivateState } from './context/PrivateContex';
import Loading from '@components/Loading';
import { PublicRoute, PrivateRoute } from '@router';
import { MAINTENANCE, ORDER, PRIVATE, SETTING } from './router/path';

const Login = lazy(() => import('@pages/login/Login'));
const Home = lazy(() => import('./pages/home/Home'));
const Setting = lazy(() => import('./pages/setting/Setting'));
const Maintenance = lazy(() => import('./pages/maintenance/Maintenance'));
const Order = lazy(() => import('./pages/order/Order'));

function App() {
  return (
    <AuthContextProvider>
      <PrivateState>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<Login />} />
              </Route>
              <Route path={PRIVATE} element={<PrivateRoute />}>
                <Route index element={<Home />} />
                <Route path={SETTING} element={<Setting />} />
                <Route path={MAINTENANCE} element={<Maintenance />} />
                <Route path={ORDER} element={<Order />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </PrivateState>
    </AuthContextProvider>
  );
}

export default App;
