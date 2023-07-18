import React from "react";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import OrderableProductItem from "./OrderableProductItem";

const ProductPage = () => {
  const [productList, setProductList] = React.useState([]);

  const fetch = async () => {
    // TODO: startLoading();
    try {
      const productList = await ProductApi.fetchProductList();
      setProductList(productList);
    } catch (e) {
      // TODO: finishLoading();
      // TODO: openDialog(<ErrorDialog />);
      return;
    }
    // TODO: finishLoading();
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
