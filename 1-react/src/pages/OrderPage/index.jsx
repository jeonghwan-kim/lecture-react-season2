import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import OrderStatusCard from "./OrderStatusCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderDeliveryCard from "./OrderDeliveryCard";

const fakeOrder = {
  id: "CACDA420",
  orderDate: "2023. 5. 13. 오후 1:37:51",
  status: "배달을 완료했어요",
  name: "짜장면",
  totalPrice: 7000,
  paymentMethod: "마이페이",
  productPrice: 6000,
  deliveryPrice: 3000,
  discountPrice: 2000,
  deliveryAddress: "서울특별시 송파구 잠실동 1번지",
  deliveryContact: "010-1111-2222",
  messageToShop: "포크는 주지 마세요",
  messageToRider: "안전하게 오세요",
  position: [30, 30],
};

const OrderPage = () => (
  <div className="OrderPage">
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
      <OrderStatusCard order={fakeOrder} />
      <OrderPaymentCard order={fakeOrder} />
      <OrderDeliveryCard order={fakeOrder} />
    </Page>
  </div>
);

export default OrderPage;
