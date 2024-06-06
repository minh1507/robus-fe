import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./modules/portal/home/home";
import Error from "./components/error/error";
import HomeAdmin from "./modules/admin/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
