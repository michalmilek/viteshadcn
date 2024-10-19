import tsparser from "@typescript-eslint/parser"
import typescripteslint from "@typescript-eslint/eslint-plugin"
import eslintpluginimport from "eslint-plugin-import"
import eslintjsxa11y from "eslint-plugin-jsx-a11y"
import eslintreact from "eslint-plugin-react"
import eslintreacthooks from "eslint-plugin-react-hooks"
import eslintpromise from "eslint-plugin-promise"
import tanStackPluginQuery from '@tanstack/eslint-plugin-query'

export default [
  {
    ignores: [".config/*", "dist", "vite.config.ts", "eslint.config.js", "postcss.config.js", "tailwind.config.js"],
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescripteslint,
      "import": eslintpluginimport,
      "jsx-a11y": eslintjsxa11y,
      "react": eslintreact,
      "react-hooks": eslintreacthooks,
      "promise": eslintpromise,
    },
    rules: {
      // Possible Errors
      "no-console": "warn",
      "no-debugger": "error",
      "no-dupe-keys": "error",
      "no-unreachable": "error",
      "no-unused-vars": "warn",
      "no-empty": ["error", { "allowEmptyCatch": true }],
      "no-extra-semi": "error",
      "no-redeclare": "error",

      // Best Practices
      "eqeqeq": ["error", "always"],
      "curly": "error",
      "no-implicit-coercion": "error",
      "no-multi-spaces": "error",
      "consistent-return": "error",
      "no-alert": "warn",
      "default-case": "error",
      "dot-notation": "error",

      // Variables
      "no-shadow": "error",
      "no-use-before-define": "error",

      // Stylistic Choices
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],

      // TypeScript Specific Rules
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-inferrable-types": "error",

      // Import Rules
      "import/no-unresolved": "error",
      "import/order": ["error", {
        "groups": [["builtin", "external", "internal"]],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
      }],

      // React Specific Rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-indent": ["error", 2],
      "react/prop-types": "off", // Disable if using TypeScript
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Promise Plugin Rules
      "promise/catch-or-return": "error",
      "promise/always-return": "error",
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ['@', './src'], // This assumes '@' maps to your 'src' folder
          ],
          extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
        },
      },
      react: {
        version: "detect",
      },
    },
  },
  ...tanStackPluginQuery.configs['flat/recommended']
];