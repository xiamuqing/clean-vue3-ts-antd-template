module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended"],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        semi: [0, "always"],
        indent: [0, 4],
        "arrow-parens": 0,
        "consistent-return": 0,
        "no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true
            }
        ],
        "@typescript-eslint/no-explicit-any": ["off"]
    }
};
