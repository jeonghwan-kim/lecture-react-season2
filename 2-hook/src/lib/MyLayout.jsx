import React from "react";
import ReactDOM from "react-dom";
import Dialog from "../components/Dialog";
import Backdrop from "../components/Backdrop";

export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export const Layout = ({ children }) => {
  const [dialog, setDialog] = React.useState();

  return (
    <layoutContext.Provider value={{ dialog, setDialog }}>
      {children}
    </layoutContext.Provider>
  );
};

export const useDialog = () => {
  const { dialog, setDialog } = React.useContext(layoutContext);
  const openDialog = (element) => setDialog(element);
  const closeDialog = () => setDialog(null);
  return { dialog, openDialog, closeDialog };
};

export const useLoading = () => {
  const { openDialog, closeDialog: finishLoading } = useDialog();
  const startLoading = (message) => openDialog(<Dialog>{message}</Dialog>);
  return { startLoading, finishLoading };
};

export const DialogContainer = () => {
  const { dialog } = useDialog();
  return (
    <>
      {dialog &&
        ReactDOM.createPortal(
          <Backdrop>{dialog}</Backdrop>,
          document.querySelector("#dialog")
        )}
    </>
  );
};
