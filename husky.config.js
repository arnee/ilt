module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'pre-push': 'ng test --no-watch --code-coverage --no-progress --browsers=ChromeHeadlessCI'
  }
};
