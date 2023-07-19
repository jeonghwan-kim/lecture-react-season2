import React from "react";
import OrderApi from "shared/api/OrderApi";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";
import PaymentButton from "./PaymentButton";
import OrderForm from "./OrderForm";

const CartPage = () => {
  const [product, setProduct] = React.useState();

  const handleSubmit = async (values) => {
    // TODO startLoading("결재중...");
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      // TODO: finishLoading();
      // TODO: openDialog(<ErrorDialog />);
      return;
    }

    // TODO: finishLoading();
    // TODO: openDialog(<PaymentSuccessDialog />);
  };

  const fetch = async (productId) => {
    // TODO: startLoading("장바구니에 담는중...");
    try {
      const product = await ProductApi.fetchProduct(productId);
      setProduct(product);
    } catch (e) {
      // TODO: openDialog(<ErrorDialog />);
      return;
    }
    // TODO: finishLoading();
  };

  React.useEffect(() => {
    // TODO const productId = searchParams.get("productId");
    // TODO if (!productId) return;

    fetch("CACDA423");
  }, []);

  return (
    <div className="CartPage">
      <Page
        header={<Title backUrl="/">장바구니</Title>}
        footer={<PaymentButton form="order-form" />}
      >
        {product && <ProductItem product={product} />}
        <OrderForm onSubmit={handleSubmit} />
      </Page>
    </div>
  );
};

export default CartPage;
