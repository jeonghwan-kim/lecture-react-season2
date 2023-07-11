import React from "react";
import ProductApi from "shared/api/ProductApi";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
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
    try {
      const product = await ProductApi.fetchProduct("CACDA421");
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  handleSubmit(values) {
    console.log(values);
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

export default CartPage;
