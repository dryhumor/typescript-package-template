module.exports = {
  '*.{js,ts}': ['prettier --write', 'eslint --max-warnings 0 --no-ignore'],
  '*.json': 'prettier --write',
};
