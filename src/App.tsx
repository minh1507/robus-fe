import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/spinner/spinner";
import { Suspense, lazy } from "react";
import { ToastProvider } from "./components/toast/toast";
import { Trans } from "react-i18next";

const User = {
  Home: lazy(() => import("./modules/portal/home/home")),
};

const Shared = {
  Error: lazy(() => import("./components/error/error")),
};

const Admin = {
  Layout: lazy(() => import("./modules/admin/layout/main/main")),
  Auth: lazy(() => import("./modules/admin/auth/auth")),
  Home: lazy(() => import("./modules/admin/home/home")),
  Account: lazy(() => import("./modules/admin/account/account")),
  Role: lazy(() => import("./modules/admin/role/role")),
  Setting: lazy(() => import("./modules/admin/setting/setting")),
  History: lazy(() => import("./modules/admin/history/history")),
  Transaction: lazy(() => import("./modules/admin/transaction/transaction")),
  Post: lazy(() => import("./modules/admin/post/post")),
  Seller: lazy(() => import("./modules/admin/seller/seller")),
  Shop: lazy(() => import("./modules/admin/shop/shop")),
  CannedFood: lazy(() => import("./modules/admin/food/cannedFood/cannedFood")),
  CookedFood: lazy(() => import("./modules/admin/food/cookedFood/cookedFood")),
  FrozenFood: lazy(() => import("./modules/admin/food/frozenFood/frozenFood")),
  RawFood: lazy(() => import("./modules/admin/food/rawFood/rawFood")),
  PreparedFood: lazy(
    () => import("./modules/admin/food/preparedFood/preparedFood")
  ),
  UnprocessedFood: lazy(
    () => import("./modules/admin/food/unprocessedFood/unprocessedFood")
  ),
  ShortTermCannedFood: lazy(
    () => import("./modules/admin/food/shortTermCannedFood/shortTermCannedFood")
  ),
  LongTermCannedFood: lazy(
    () => import("./modules/admin/food/longTermCannedFood/longTermCannedFood")
  ),
  SideDish: lazy(() => import("./modules/admin/food/sideDishe/sideDish")),
  MainDishe: lazy(() => import("./modules/admin/food/mainDish/mainDish")),
  DessertFood: lazy(
    () => import("./modules/admin/food/dessertFood/dessertFood")
  ),
  AnimalFood: lazy(() => import("./modules/admin/food/animalFood/animalFood")),
  PlanBasedFood: lazy(
    () => import("./modules/admin/food/plantBasedFood/planBasedFood")
  ),
  BarChart: lazy(() => import("./modules/admin/chart/barChart/barChart")),
  LineChart: lazy(() => import("./modules/admin/chart/lineChart/lineChart")),
  PieChart: lazy(() => import("./modules/admin/chart/pieChart/pieChart")),
  Chart: lazy(() => import("./modules/admin/chart/chart")),
};

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
              <Route path="history" element={<Admin.History />} />
              <Route path="transaction" element={<Admin.Transaction />} />
              <Route path="post" element={<Admin.Post />} />
              <Route path="seller" element={<Admin.Seller />} />
              <Route path="shop" element={<Admin.Shop />} />
              <Route path="cannedFood" element={<Admin.CannedFood />} />
              <Route path="cookedFood" element={<Admin.CookedFood />} />
              <Route path="frozenFood" element={<Admin.FrozenFood />} />
              <Route path="rawFood" element={<Admin.RawFood />} />
              <Route path="preparedFood" element={<Admin.PreparedFood />} />
              <Route
                path="shortTermCannedFood"
                element={<Admin.ShortTermCannedFood />}
              />
              <Route
                path="unprocessedFood"
                element={<Admin.UnprocessedFood />}
              />

              <Route
                path="longTermCannedFood"
                element={<Admin.LongTermCannedFood />}
              />
              <Route path="sideDish" element={<Admin.SideDish />} />
              <Route path="mainDish" element={<Admin.MainDishe />} />
              <Route path="dessertFood" element={<Admin.DessertFood />} />
              <Route path="animalFood" element={<Admin.AnimalFood />} />
              <Route path="barChart" element={<Admin.BarChart />} />
              <Route path="planBasedFood" element={<Admin.PlanBasedFood />} />
              <Route path="lineChart" element={<Admin.LineChart />} />
              <Route path="pieChart" element={<Admin.PieChart />} />
              <Route path="chart" element={<Admin.Chart />} />
            </Route>
          </Routes>
        </ToastProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
