
set -e

npm run build

cd dist

git add -A

git commit -m "deploy"

git push -f  git@github.com:adi-peled/portfolio.git master:gh-pages

cd -