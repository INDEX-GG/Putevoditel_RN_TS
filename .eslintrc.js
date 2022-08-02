// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    // indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    // quotes: ["error", "double"],
    // semi: ["error", "always"],
  },
};
