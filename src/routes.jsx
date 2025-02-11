import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/item/:id" element={<ItemPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
    </Routes>
  );
}

export default AppRoutes;
