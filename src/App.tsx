import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/spinner/spinner";
import { Suspense, lazy } from "react";

const Home = lazy(() => import('./modules/portal/home/home'));
const Error = lazy(() => import('./components/error/error'));
const Auth = lazy(() => import('./modules/admin/auth/auth'));
const HomeAdmin = lazy(() => import('./modules/admin/home/home'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/login-admin" element={<Auth />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
