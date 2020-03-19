module.exports = {
  '*.{js,ts}': ['eslint --max-warnings 0', 'prettier --write'],
  '*.json': 'prettier --write'
};
