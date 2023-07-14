import * as MyRouter from "../lib/MyRouter";

const Navbar = () => (
  <nav className="Navbar">
    <MyRouter.Link className="active" to="/">
      메뉴목록
    </MyRouter.Link>
    <MyRouter.Link to="/order">주문내역</MyRouter.Link>
  </nav>
);

export default Navbar;
