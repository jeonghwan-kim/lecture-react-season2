import React from "react";

export const routerContext = React.createContext({});
routerContext.displayName = "RouterContext";

export const Router = () => {
  const [path, setPath] = React.useState(window.location.pathname);

  const changePath = (path) => {
    setPath(path);
    window.history.pushState({ path }, "", path);
  };

  const handlePopstate = (event) => {
    const nextPath = event.state && event.state.path;
    if (!nextPath) return;
    setPath(nextPath);
  };

  React.useEffect(() => {
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <routerContext.Provider value={{ path, changePath }}>
      {children}
    </routerContext.Provider>
  );
};
