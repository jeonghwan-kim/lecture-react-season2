import * as MyLayout from "../lib/MyLayout";
import Dialog from "./Dialog";
import Button from "./Button";

const ErrorDialog = () => {
  const { closeDialog } = MyLayout.useDialog();

  return (
    <Dialog
      header={<>오류</>}
      footer={<Button onClick={closeDialog}>네, 알겠습니다</Button>}
    >
      잠시 후 다시 시도해 주세요.
    </Dialog>
  );
};

export default ErrorDialog;
