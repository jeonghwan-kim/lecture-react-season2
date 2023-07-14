import React from "react";
import { createEventEmitter } from "shared/lib/EventEmitter";

const MyReact = (function () {
  function createContext(initialValue) {
    const emitter = createEventEmitter(initialValue);

    class Provider extends React.Component {
      componentDidMount() {
        emitter.set(this.props.value);
      }

      componentDidUpdate() {
        emitter.set(this.props.value);
      }

      render() {
        return <>{this.props.children}</>;
      }
    }

    class Consumer extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value: emitter.get(),
        };
        this.setValue = this.setValue.bind(this);
      }

      setValue(nextValue) {
        this.setState({ value: nextValue });
      }

      componentDidMount() {
        emitter.on(this.setValue);
      }

      componentWillUnmount() {
        emitter.off(this.setValue);
      }

      render() {
        return <>{this.props.children(this.state.value)}</>;
      }
    }

    return {
      Provider,
      Consumer,
    };
  }

  return {
    createContext,
  };
})();

export default MyReact;
