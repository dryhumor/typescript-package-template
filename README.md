# <Project Name>

## Usage

1. `cp -r typescript-package-template <new-project-name>`
2. `cd <new-project-name>`
3. ```
   rm -rf .git && git init && npm rebuild && npm i && \
   git add . && git commit -am "Initial commit (typescript-package-template)"
   ```
4. Replace placeholder data
   1. `name` in package.json
   2. `<DESCRIPTION>` in package.json
   3. `<OWNER>` in package.json and CHANGELOG.md
   4. `<REPO>` in package.json and CHANGELOG.md
   5. `author.name` in package.json
   6. `author.email` in package.json
   7. `author.url` in package.json
   8. `<Project Name>` in README.md
5. `npm i`
6. `git commit -am "Replace placeholder data"`
