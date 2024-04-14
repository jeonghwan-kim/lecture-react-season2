import { render } from "@testing-library/react";

import MyReact from "../src/lib/MyReact";

let consumerRenderCount = 0;

describe("useContext", () => {
  test("컴포넌트가 한 번만 렌더 된다.", () => {
    // 컨택스트를 만든다.
    const context = MyReact.createContext({ foo: 0 });

    // 컨택스트에 값을 제공한다.
    const Provider = ({ children }) => {
      return <context.Provider value={{ foo: 1 }}>{children}</context.Provider>;
    };

    // 훅으로 컨택스트 값을 사용한다.
    const Consumer = () => {
      consumerRenderCount = consumerRenderCount + 1;
      const value = MyReact.useContext(context);
      return <div>{value.foo}</div>;
    };

    const { getByText } = render(
      <Provider>
        <Consumer />
      </Provider>
    );

    expect(getByText(1)).toBeTruthy();
    expect(consumerRenderCount).toBe(1);
  });
});
