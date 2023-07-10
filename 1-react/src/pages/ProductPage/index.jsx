import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";

const fakeProduct = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: "6000",
  thumbnail: "./images/menu-해물계란라면.jpg",
};

const ProductPage = () => (
  <div className="ProductPage">
    <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
      <ul>
        <li>
          <ProductItem product={fakeProduct} />
        </li>
      </ul>
    </Page>
  </div>
);

export default ProductPage;
