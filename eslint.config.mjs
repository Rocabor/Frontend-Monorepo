import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  // 1. Ignorados globales (Deben ir al principio o solos en su objeto)
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.turbo/**', '**/public/**', '**/scripts/**', '**/*.config.*'],
  },

  // 2. Configuraciones base recomendadas
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  // 3. Tus reglas personalizadas y opciones de lenguaje
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Reglas de Vue personalizadas
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/no-unused-refs': 'warn',
      'vue/no-unused-vars': 'warn',

      // Reglas generales de JavaScript
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-duplicate-imports': 'warn',
      'prefer-const': 'warn',
      'no-var': 'warn',
      eqeqeq: ['error', 'always'],
    },
  },
];
