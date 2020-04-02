module.exports = {
  hooks: {
    'pre-commit': 'npm run buildall && lint-staged',
  },
};
