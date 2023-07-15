import ProductItem from "../../components/ProductItem";
import * as MyRouter from "../../lib/MyRouter";

const OrderableProductItem = ({ product, navigate }) => {
  const handleClick = () => {
    navigate(`/cart`);
  };
  return <ProductItem product={product} onClick={handleClick} />;
};

export default MyRouter.withRouter(OrderableProductItem);
