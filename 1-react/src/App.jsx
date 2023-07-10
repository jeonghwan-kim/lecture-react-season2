import ProductItem from "./components/ProductItem";
import Title from "./components/Title";

const fakeProduct = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: "6000",
  thumbnail: "./images/menu-해물계란라면.jpg",
};

const App = () => (
  <div className="ProductPage">
    <div className="Page">
      <header>
        <Title>메뉴목록</Title>
      </header>
      <main>
        <ul>
          <li>
            <ProductItem product={fakeProduct} />
          </li>
        </ul>
      </main>
      <footer>
        <nav className="Navbar">
          <a className="active" href="#">
            메뉴목록
          </a>
          <a href="#">주문내역</a>
        </nav>
      </footer>
    </div>
  </div>
);

export default App;
