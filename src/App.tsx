import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import LoadingSpinner from "./components/spinner/spinner";
import {Suspense} from "react";
import {ToastProvider} from "./components/toast/toast";
import AdminModule from "./modules/admin/admin.module";
import PortalModule from "./modules/portal/portal.module";


const authenticationRouter = () => {
    let router: React.ReactElement | null = null
    const user = {
        role: 'Admin'
    }
    switch (user.role) {
        case 'Admin':
            router = <AdminModule/>
            break;
        case 'Portal':
            router = <PortalModule/>
            break;
    }

    return (
        <React.Fragment>
            {router && router}
        </React.Fragment>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingSpinner/>}>
                <ToastProvider>
                    {authenticationRouter()}
                </ToastProvider>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
