import LayoutAdmin from "layout/LayoutAdmin";
import ContactPage from "pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<LayoutAdmin />}>
        <Route path="/" element={<ContactPage />}></Route>
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
