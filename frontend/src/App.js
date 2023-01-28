import LayoutAdmin from "layout/LayoutAdmin";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="layout" element={<LayoutAdmin />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
