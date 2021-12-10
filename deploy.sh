
set -e

npm run build

cd dist

git add -A

git commit -m "deploy"

git push -f  https://github.com/adi-peled/portfolio.git main:gh-pages

cd -