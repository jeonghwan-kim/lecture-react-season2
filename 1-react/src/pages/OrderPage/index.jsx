import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

const OrderPage = () => (
  <div className="OrderPage">
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
      여기에 메인 컨텐츠를 담는다.
    </Page>
  </div>
);

export default OrderPage;
