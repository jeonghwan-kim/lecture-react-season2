import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({ product }) => {
  const handleClick = () => {
    // TODO: navigate(`/cart?productId=${product.id}`);
  };
  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductItem;
