import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
// import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintPluginTs from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("next/core-web-vitals"),

  {
    plugins: {
      "unused-imports": eslintPluginUnusedImports,
      // tailwindcss: eslintPluginTailwind,
      "@typescript-eslint": eslintPluginTs,
    },
    rules: {
      "@next/next/no-img-element": "off",
      "unused-imports/no-unused-imports": "error",
      // "unused-imports/no-unused-vars": [
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      // "tailwindcss/classnames-order": "warn",
      // "tailwindcss/no-custom-classname": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    ignores: ["**/node_modules/**", ".next/**", "public/**", "out/**"],
  },
];
