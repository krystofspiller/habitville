module.exports = {
  extends: ['expo', 'prettier', 'plugin:@typescript-eslint/recommended-type-checked', "plugin:import/errors",
    "plugin:import/warnings", 'plugin:import/typescript'],
  ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': 'error',
    "@typescript-eslint/unbound-method": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    projectService: true,
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'prettier',
    "@typescript-eslint",
    "import"
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project: [
          "packages/mobile/tsconfig.json",
          "packages/web/tsconfig.json"
        ],
      }
    }
  },
  ignorePatterns: ['prettier.config.js', '.eslintrc.js', 'tailwind.config.ts', 'metro.config.js', 'babel.config.js', 'convex/_generated/**/*.js']
};
