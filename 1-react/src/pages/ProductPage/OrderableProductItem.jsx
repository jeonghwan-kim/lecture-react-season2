import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({ product }) => {
  const handleClick = () => {
    console.log("// TODO 장바구니 화면으로 이동");
  };
  return <ProductItem product={product} onClick={handleClick} />;
};

export default OrderableProductItem;
