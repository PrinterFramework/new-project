import prettier from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'

const compat = new FlatCompat()

export default tseslint.config(
  prettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...fixupConfigRules(compat.extends('plugin:@next/next/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  ...fixupConfigRules(compat.extends('plugin:jsx-a11y/strict')),
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/require-await': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/unbound-method': 0,
      '@typescript-eslint/no-unsafe-argument': 0,
      '@typescript-eslint/prefer-nullish-coalescing': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@next/next/no-img-element': 0,
      'react/react-in-jsx-scope': 0,
      'no-empty-pattern': 0,
      'no-useless-escape': 0,
      'no-constant-condition': 0,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'none'
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^\\u0000',
              '^\\w[^{}]*$',
              '^@\\w[^{}]*$',
              '^\\w.*\\{.*\\}',
              '^@\\w.*\\{.*\\}',
              '^\\.'
            ]
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  },
  { ignores: ['.next', 'next.config.js'] }
)
