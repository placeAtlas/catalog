# This command should be run on CI/Netlify enviroment!
# If you really wanted to run it, run it on the root.

rm -rf dist-temp
rm -rf dist
rm -rf .parcel-cache

cp -r web/ dist-temp/
cp tools/ci/postcss.config.js ./
cp tools/ci/package.json ./
cp tools/ci/.parcelrc ./

if [ "$NETLIFY" = true ]; then
	echo ".d-none.d-netlify-block {display: block}" >> dist-temp/_css/style.css
fi

npm i
python tools/ci/cdn-to-local.py
npx parcel build dist-temp/index.html dist-temp/**.html --dist-dir "dist" --no-source-maps --no-content-hash --public-url ./

rm -rf dist-temp
rm -rf postcss.config.js
rm -rf .parcelrc

cp -r web/_img/ dist/
cp web/atlas.json dist/
cp web/*.txt dist/
cp web/_headers dist/
cp web/favicon.ico dist/