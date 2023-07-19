import * as MyRouter from "../../lib/MyRouter";
import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({ product }) => {
  const navigate = MyRouter.useNavigate();
  const handleClick = () => {
    navigate(`/cart?productId=${product.id}`);
  };
  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductItem;
