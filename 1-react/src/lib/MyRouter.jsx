import React from "react";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ProductPage from "../pages/ProductPage";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
    this.handleChangePath = this.handleChangePath.bind(this);
  }

  handleChangePath(path) {
    this.setState({ path });
  }

  render() {
    const contextValue = {
      path: this.state.path,
      changePath: this.handleChangePath,
    };

    return (
      <routerContext.Provider value={contextValue}>
        {this.props.children}
      </routerContext.Provider>
    );
  }
}

export const Routes = () => (
  <routerContext.Consumer>
    {({ path }) => (
      <>
        {path === "/cart" && <CartPage />}
        {path === "/order" && <OrderPage />}
        {!["/cart", "/order"].includes(path) && <ProductPage />}
      </>
    )}
  </routerContext.Consumer>
);

export const Link = ({ to, ...rest }) => (
  <routerContext.Consumer>
    {({ path, changePath }) => {
      const handleClick = (e) => {
        e.preventDefault();
        if (to !== path) changePath(to);
      };

      return <a {...rest} href={to} onClick={handleClick} />;
    }}
  </routerContext.Consumer>
);
