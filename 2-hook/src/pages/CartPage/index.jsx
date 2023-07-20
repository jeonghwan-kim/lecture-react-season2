import React from "react";
import OrderApi from "shared/api/OrderApi";
import ProductApi from "shared/api/ProductApi";
import * as MyRouter from "../../lib/MyRouter";
import * as MyLayout from "../../lib/MyLayout";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";
import ErrorDialog from "../../components/ErrorDialog";
import PaymentButton from "./PaymentButton";
import OrderForm from "./OrderForm";
import PaymentSuccessDialog from "./PaymentSuccessDialog";

const CartPage = () => {
  const [product, setProduct] = React.useState();
  const { productId } = MyRouter.useParams();
  const { startLoading, finishLoading } = MyLayout.useLoading();
  const { openDialog } = MyLayout.useDialog();

  const fetch = async (productId) => {
    startLoading("장바구니에 담는중...");
    try {
      const product = await ProductApi.fetchProduct(productId);
      setProduct(product);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };

  const handleSubmit = async (values) => {
    startLoading("결재중...");
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      finishLoading();
      openDialog(<ErrorDialog />);
      return;
    }

    finishLoading();
    openDialog(<PaymentSuccessDialog />);
  };

  React.useEffect(() => {
    if (!productId) return;

    fetch(productId);
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
