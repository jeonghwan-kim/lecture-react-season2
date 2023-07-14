import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const { pathname } = window.location;
  return (
    <>
      {pathname === "/cart" && <CartPage />}
      {pathname === "/order" && <OrderPage />}
      {!["/cart", "/order"].includes(pathname) && <ProductPage />}
    </>
  );
};

export default App;
