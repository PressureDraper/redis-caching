import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        files: ["src/**/*.ts", "src/**/*.tsx"],

        languageOptions: {
            parser: tsParser,
        },

        plugins: {
            "@typescript-eslint": tsPlugin,
            prettier: prettierPlugin
        },

        rules: {
            ...tsPlugin.configs.recommended.rules,
            "prettier/prettier": "error"
        },

        ignores: [
            "src/generated/**"
        ]
    },

    prettierConfig
];