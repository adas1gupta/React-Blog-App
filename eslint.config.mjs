import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ...reactPlugin.configs.flat.recommended,
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    reactPlugin.configs.flat["jsx-runtime"],
    ...pluginQuery.configs['flat/recommended'],
    js.configs.recommended,
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "react/no-unescaped-entities": "off",
            "react/prop-types": "off"
        }
    },
    prettier
]