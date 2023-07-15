import React from "react";
import { getComponentName } from "./utils";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: window.location.pathname,
    };
    this.handleChangePath = this.handleChangePath.bind(this);
    this.handleOnpopstate = this.handleOnpopstate.bind(this);
  }

  handleChangePath(path) {
    this.setState({ path });
    window.history.pushState({ path }, "", path);
  }

  handleOnpopstate(event) {
    const nextPath = event.state && event.state.path;
    if (!nextPath) return;
    this.setState({ path: nextPath });
  }

  componentDidMount() {
    window.addEventListener("popstate", this.handleOnpopstate);
    window.history.replaceState({ path: this.state.path }, "");
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handleOnpopstate);
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

export const Routes = ({ children }) => (
  <routerContext.Consumer>
    {({ path }) => {
      // 반환할 리액트 엘리먼트
      let selectedRoute = null;

      React.Children.forEach(children, (child) => {
        // 리액트 엘리먼트인지 검사한다
        if (!React.isValidElement(child)) return;

        // 프레그먼트인지 검사한다
        if (child.type === React.Fragment) return;

        // Route 컴포넌트인지 검사한다. 덕 타이핑
        if (!child.props.path || !child.props.element) return;

        // Route에 등록된 컴포넌트가 요청한 경로에 해당하는지 검사한다.
        // 요청 경로에서 쿼리 문자열을 제거하고 비교한다.
        if (child.props.path !== path.replace(/\?.*$/, "")) return;

        // 엘리먼트를 찾았다.
        selectedRoute = child.props.element;
      });

      return selectedRoute;
    }}
  </routerContext.Consumer>
);

/**
 * 사용 예
 * <MyRouter.Route path={'경로'} element={<리액트_앨리먼트 />} />
 */
export const Route = () => null;

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

export const withRouter = (WrappedComponent) => {
  const WithRouter = (props) => (
    <routerContext.Consumer>
      {({ path, changePath }) => {
        const navigate = (nextPath) => {
          if (path !== nextPath) changePath(nextPath);
        };

        const match = (comparedPath) => path === comparedPath;

        const params = () => {
          const params = new URLSearchParams(window.location.search);
          const paramObject = {};
          for (const [key, value] of params) {
            paramObject[key] = value;
          }
          return paramObject;
        };

        const enhancedProps = {
          navigate,
          match,
          params,
        };
        return <WrappedComponent {...props} {...enhancedProps} />;
      }}
    </routerContext.Consumer>
  );
  WithRouter.displayName = `WithRouter(${getComponentName(WrappedComponent)})`;
  return WithRouter;
};
