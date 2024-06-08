import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 

import "./i18n";
        
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App/>
    </PrimeReactProvider>
  </React.StrictMode>,
);
