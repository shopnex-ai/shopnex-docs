module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'next/core-web-vitals',
        'prettier',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-key': 'error',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                depth: 3,
            },
        ],
    },
    ignorePatterns: [
        '**/*.js',
        '**/*.json',
        'node_modules',
        'public',
        'styles',
        '.next',
        'coverage',
        'dist',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
};
