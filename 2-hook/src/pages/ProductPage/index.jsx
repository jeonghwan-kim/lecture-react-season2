import React from "react";
import ProductApi from "shared/api/ProductApi";
import * as MyLayout from "../../lib/MyLayout";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ErrorDialog from "../../components/ErrorDialog";
import OrderableProductItem from "./OrderableProductItem";

const ProductPage = () => {
  const [productList, setProductList] = React.useState([]);
  const { startLoading, finishLoading } = MyLayout.useLoading();
  const { openDialog } = MyLayout.useDialog();

  const fetch = async () => {
    startLoading("메뉴 목록 로딩중...");
    try {
      const productList = await ProductApi.fetchProductList();
      setProductList(productList);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="ProductPage">
      <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              <OrderableProductItem product={product} />
            </li>
          ))}
        </ul>
      </Page>
    </div>
  );
};

export default ProductPage;
