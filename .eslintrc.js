module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended'
	],
	rules: {
		semi: 1,
		quotes: [2, 'single'],
		'react/prop-types': 2,
		'linebreak-style': 0,
		'import/no-extraneous-dependencies': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/require-default-props': 0,
		indent: 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'react/forbid-prop-types': 0,
		'import/prefer-default-export': 0,
		'prettier/prettier': 2,
		'no-use-before-define': 0,
		'no-param-reassign': 0,
		'class-methods-use-this': 0
	},
	env: {
		es6: true,
		browser: true,
		node: true // using variable in node environment VD: process.env
	}
};
