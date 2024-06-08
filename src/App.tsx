import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/spinner/spinner";
import { Suspense, lazy, useRef } from "react";
import { ToastProvider } from "./components/toast/toast";

const Home = lazy(() => import('./modules/portal/home/home'));
const Error = lazy(() => import('./components/error/error'));
const Auth = lazy(() => import('./modules/admin/auth/auth'));
const HomeAdmin = lazy(() => import('./modules/admin/home/home'));
const MainAdmin = lazy(() => import('./modules/admin/layout/main/main'));
const AcountAdmin = lazy(() => import('./modules/admin/account/account'));
const RoleAdmin = lazy(() => import('./modules/admin/role/role'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <ToastProvider> <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />

          {/* Admin routes */}
          <Route path="admin/login" element={<Auth />} />
          <Route path="admin" element={<MainAdmin />}>
            <Route path="home" element={<Navigate to="/admin" />} />
            <Route path="account" element={<AcountAdmin />} />
            <Route path="role" element={<RoleAdmin />} />
            <Route index element={<HomeAdmin />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes></ToastProvider>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;
