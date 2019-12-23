module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [ // 添加prettier规则
      "error",
          {
              // "singleQuote": true,
              //"semi": true,
              // "semicolons": true,
              // "bracketSpacing": false,
              // "trailingComma": "none",
              // "jsxBracketSameLine": true    
          }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
