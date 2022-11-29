module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['react-hooks'],
    rules: {
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
}
