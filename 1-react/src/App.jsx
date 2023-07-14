import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import * as MyRouter from "./lib/MyRouter";

const App = () => (
  <MyRouter.routerContext.Consumer>
    {({ path }) => (
      <MyRouter.Router>
        {path === "/cart" && <CartPage />}
        {path === "/order" && <OrderPage />}
        {!["/cart", "/order"].includes(path) && <ProductPage />}
      </MyRouter.Router>
    )}
  </MyRouter.routerContext.Consumer>
);

export default App;
