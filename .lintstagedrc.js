module.exports = {
  '*.{js,ts}': ['prettier --write', 'eslint --max-warnings 0'],
  '*.json': 'prettier --write',
};
