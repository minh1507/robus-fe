import * as React from "react";
import {Navigate, Route} from "react-router-dom";
import {lazy} from "react";

const portalNamespace = {
    Home: lazy(() => import("../../modules/portal/home/home")),
};

const Shared = {
    Error: lazy(() => import("../../components/error/error")),
};


function PortalModule() {
    return (
        <Routes>
            <Route path="/" element={<portalNamespace.Home/>}/>
            <Route path="home" element={<Navigate to="/"/>}/>
            <Route path="*" element={<Shared.Error/>}/>
            <Route path="*" element={<Shared.Error/>}/>
        </Routes>
    );
}

export default PortalModule;
