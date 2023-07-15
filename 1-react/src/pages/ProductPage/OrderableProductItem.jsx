import ProductItem from "../../components/ProductItem";
import * as MyRouter from "../../lib/MyRouter";

const OrderableProductItem = ({ product }) => (
  <MyRouter.routerContext.Consumer>
    {({ changePath }) => {
      const handleClick = () => {
        changePath(`/cart`);
      };
      return <ProductItem product={product} onClick={handleClick} />;
    }}
  </MyRouter.routerContext.Consumer>
);

export default OrderableProductItem;
