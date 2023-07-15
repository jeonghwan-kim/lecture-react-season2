import Dialog from "../../components/Dialog";
import Button from "../../components/Button";
import * as MyLayout from "../../lib/MyLayout";
import * as MyRouter from "../../lib/MyRouter";

const PaymentSuccessDialog = ({ navigate, closeDialog }) => {
  const handleClickNo = () => {
    closeDialog();
    navigate("/");
  };

  const handleClickYes = () => {
    closeDialog();
    navigate("/order");
  };

  return (
    <Dialog
      header={<>결제 완료</>}
      footer={
        <>
          <Button style={{ marginRight: "8px" }} onClick={handleClickNo}>
            아니오
          </Button>
          <Button styleType="brand" onClick={handleClickYes}>
            네, 주문상태를 확인합니다.
          </Button>
        </>
      }
    >
      결제가 완료되었습니다. 주문 상태를 보러 가시겠습니까?
    </Dialog>
  );
};

export default MyLayout.withLayout(MyRouter.withRouter(PaymentSuccessDialog));
