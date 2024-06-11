import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/spinner/spinner";
import { Suspense, lazy } from "react";
import { ToastProvider } from "./components/toast/toast";

const User = {
  Home: lazy(() => import("./modules/portal/home/home"))
}

const Shared = {
  Error: lazy(() => import("./components/error/error")),
}

const Admin = {
  Layout: lazy(() => import("./modules/admin/layout/main/main")),
  Auth: lazy(() => import("./modules/admin/auth/auth")),
  Home: lazy(() => import("./modules/admin/home/home")),
  Account: lazy(() => import("./modules/admin/account/account")),
  Role: lazy(() => import("./modules/admin/role/role")),
  Setting: lazy(() => import("./modules/admin/setting/setting"))
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<User.Home />} />
            <Route path="home" element={<Navigate to="/" />} />

            {/* Admin routes */}
            <Route path="admin/login" element={<Admin.Auth />} />
            <Route path="admin" element={<Admin.Layout />}>
              <Route path="home" element={<Navigate to="/admin" />} />
              <Route path="account" element={<Admin.Account />} />
              <Route path="role" element={<Admin.Role />} />
              <Route path="setting" element={<Admin.Setting />} />
              <Route index element={<Admin.Home />} />
            </Route>

            <Route path="*" element={<Shared.Error />} />
          </Routes>
        </ToastProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
