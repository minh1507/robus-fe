import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/portal/home/home";
import Error from "./components/error/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
