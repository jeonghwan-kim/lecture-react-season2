// package.json에서 꺼냄. babel-jest rootMode 설정 동작때문.
module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
