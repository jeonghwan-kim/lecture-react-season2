import Button from "./components/Button";

const App = () => (
  <div className="ProductPage">
    <div className="Page">
      <header>
        <h1>메뉴목록</h1>
      </header>
      <main>
        <ul>
          <li>
            <div className="ProductItem">
              <div className="description">
                <h2>고소한 바질 파스타</h2>
                <div>6,000원</div>
                <Button styleType="brand" onClick={() => console.log("click")}>
                  주문하기
                </Button>
              </div>
              <div className="thumbnail">
                <img
                  src="./images/menu-고소한바질파스타.jpg"
                  alt="고소한바질파스타 6,000원"
                />
              </div>
            </div>
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
