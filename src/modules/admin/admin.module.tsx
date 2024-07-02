import * as React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {lazy} from "react";

const adminNamespace = {
    Layout: lazy(() => import("../../modules/admin/layout/main/main")),
    Auth: lazy(() => import("../../modules/admin/auth/auth")),
    Home: lazy(() => import("../../modules/admin/home/home")),
    Account: lazy(() => import("../../modules/admin/account/account")),
    RolePermission: lazy(() => import("./role-permission/role-permission")),
    Setting: lazy(() => import("../../modules/admin/setting/setting")),
    History: lazy(() => import("../../modules/admin/history/history")),
    Transaction: lazy(() => import("../../modules/admin/transaction/transaction")),
    Post: lazy(() => import("../../modules/admin/post/post")),
    Seller: lazy(() => import("../../modules/admin/seller/seller")),
    Shop: lazy(() => import("../../modules/admin/shop/shop")),
    CannedFood: lazy(() => import("../../modules/admin/food/cannedFood/cannedFood")),
    CookedFood: lazy(() => import("../../modules/admin/food/cookedFood/cookedFood")),
    FrozenFood: lazy(() => import("../../modules/admin/food/frozenFood/frozenFood")),
    RawFood: lazy(() => import("../../modules/admin/food/rawFood/rawFood")),
    PreparedFood: lazy(
        () => import("../../modules/admin/food/preparedFood/preparedFood")
    ),
    UnprocessedFood: lazy(
        () => import("../../modules/admin/food/unprocessedFood/unprocessedFood")
    ),
    ShortTermCannedFood: lazy(
        () => import("../../modules/admin/food/shortTermCannedFood/shortTermCannedFood")
    ),
    LongTermCannedFood: lazy(
        () => import("../../modules/admin/food/longTermCannedFood/longTermCannedFood")
    ),
    SideDish: lazy(() => import("../../modules/admin/food/sideDishe/sideDish")),
    MainDish: lazy(() => import("../../modules/admin/food/mainDish/mainDish")),
    DessertFood: lazy(
        () => import("../../modules/admin/food/dessertFood/dessertFood")
    ),
    AnimalFood: lazy(() => import("../../modules/admin/food/animalFood/animalFood")),
    PlanBasedFood: lazy(
        () => import("../../modules/admin/food/plantBasedFood/planBasedFood")
    ),
    Dashboard: lazy(() => import("./dashboard/dashboard")),
};

const Shared = {
    Error: lazy(() => import("../../components/error/error")),
};

function Admin() {
    return (
        <Routes>
            <Route path="admin/login" element={<adminNamespace.Auth/>}/>
            <Route path="admin" element={<adminNamespace.Layout/>}>
                <Route path="home" element={<Navigate to="/admin"/>}/>
                <Route path="account" element={<adminNamespace.Account/>}/>
                <Route path="role" element={<adminNamespace.RolePermission/>}/>
                <Route path="setting" element={<adminNamespace.Setting/>}/>
                <Route index element={<adminNamespace.Home/>}/>
                <Route path="history" element={<adminNamespace.History/>}/>
                <Route path="transaction" element={<adminNamespace.Transaction/>}/>
                <Route path="post" element={<adminNamespace.Post/>}/>
                <Route path="seller" element={<adminNamespace.Seller/>}/>
                <Route path="shop" element={<adminNamespace.Shop/>}/>
                <Route path="cannedFood" element={<adminNamespace.CannedFood/>}/>
                <Route path="cookedFood" element={<adminNamespace.CookedFood/>}/>
                <Route path="frozenFood" element={<adminNamespace.FrozenFood/>}/>
                <Route path="rawFood" element={<adminNamespace.RawFood/>}/>
                <Route path="preparedFood" element={<adminNamespace.PreparedFood/>}/>
                <Route
                    path="shortTermCannedFood"
                    element={<adminNamespace.ShortTermCannedFood/>}
                />
                <Route
                    path="unprocessedFood"
                    element={<adminNamespace.UnprocessedFood/>}
                />

                <Route
                    path="longTermCannedFood"
                    element={<adminNamespace.LongTermCannedFood/>}
                />
                <Route path="sideDish" element={<adminNamespace.SideDish/>}/>
                <Route path="mainDish" element={<adminNamespace.MainDish/>}/>
                <Route path="dessertFood" element={<adminNamespace.DessertFood/>}/>
                <Route path="animalFood" element={<adminNamespace.AnimalFood/>}/>
                <Route path="planBasedFood" element={<adminNamespace.PlanBasedFood/>}/>
                <Route path="chart" element={<adminNamespace.Dashboard/>}/>
            </Route>
            <Route path="*" element={<Shared.Error/>}/>
        </Routes>
    );
}

export default Admin;
