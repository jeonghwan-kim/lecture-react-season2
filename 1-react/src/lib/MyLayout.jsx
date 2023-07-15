import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../components/Backdrop";
import Dialog from "../components/Dialog";
import { getComponentName } from "./utils";

export const layoutContext = React.createContext({});
layoutContext.displayName = "LayoutContext";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: null,
    };
    this.setDialog = this.setDialog.bind(this);
  }

  setDialog(dialog) {
    this.setState({ dialog });
  }

  render() {
    const value = {
      dialog: this.state.dialog,
      setDialog: this.setDialog,
    };
    return (
      <layoutContext.Provider value={value}>
        {this.props.children}
      </layoutContext.Provider>
    );
  }
}

export const withLayout = (WrappedComponent) => {
  const WithLayout = (props) => (
    <layoutContext.Consumer>
      {({ dialog, setDialog }) => {
        const openDialog = setDialog;
        const closeDialog = () => setDialog(null);

        const startLoading = (message) =>
          openDialog(<Dialog>{message}</Dialog>);
        const finishLoading = closeDialog;

        const enhancedProps = {
          dialog,
          openDialog,
          closeDialog,
          startLoading,
          finishLoading,
        };
        return <WrappedComponent {...props} {...enhancedProps} />;
      }}
    </layoutContext.Consumer>
  );
  WithLayout.displayName = `WithLayout(${getComponentName(WrappedComponent)})`;
  return WithLayout;
};

export const DialogContainer = withLayout(
  ({ dialog }) =>
    dialog &&
    ReactDOM.createPortal(
      <Backdrop>{dialog}</Backdrop>,
      document.querySelector("#dialog")
    )
);
