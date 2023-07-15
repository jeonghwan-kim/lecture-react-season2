import React from "react";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import * as MyRouter from "../../lib/MyRouter";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.fetch();
  }

  async fetch() {
    const { productId } = this.props.params();
    if (!productId) return;
    try {
      const product = await ProductApi.fetchProduct(productId);
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  handleSubmit(values) {
    console.log(values);

    // TODO: 결제 성공 후

    this.props.navigate("/order");
  }

  render() {
    const { product } = this.state;
    return (
      <div className="CartPage">
        <Page
          header={<Title backUrl="/">장바구니</Title>}
          footer={<PaymentButton />}
        >
          {product && <ProductItem product={product} />}
          <OrderForm onSubmit={this.handleSubmit} />
        </Page>
      </div>
    );
  }
}

export default MyRouter.withRouter(CartPage);
