module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  env: {
    'jest/globals': true
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  'rules': { // 0 = off, 1 = warn, 2 = error
    "import/prefer-default-export": ["off"],
    'eol-last': ['error', 'always'],
    'max-len': ['warn', 150],
    'import/no-cycle': ['off'],
    'no-undef': ['off'],
    'no-plusplus': ['off'],
    'no-console': ['off'],
    'import/no-default-export': ['error'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/no-for-in-array': ['error'],
    '@typescript-eslint/naming-convention': ['error',
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'function',
        'format': ['camelCase']
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    '@typescript-eslint/no-dynamic-delete': ['error'],
    '@typescript-eslint/no-misused-new': ['error'],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error', {
      'before': false,
      'after': true,
      overrides: {
        arrow: {
          before: true,
          after: true
        }
      }
    }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'class-methods-use-this': ['off'],
    'no-magic-numbers': ["error", { "ignoreArrayIndexes": true, "ignore": [0, 1, -1] }],
  },
  "overrides": [
    {
      "files": ["*.spec.ts",],
      "rules": {
        "max-classes-per-file": 0 // allow create as many mock classes as required in tests
      }
    },
  ]
};
