module.exports = {
    env: {
    node: true,
    commonjs: true,
    es2022: true,
    },
    extends: 'eslint:recommended',
    parser: '@babel/eslint-parser',
    rules: {
    'no-unused-vars': 'off'
    },
    };