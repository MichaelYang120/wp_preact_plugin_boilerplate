start:
	echo "install, dev, build, buildwatch, purge"

install:
	npm install --include=dev

build:
	rm -rf dist node_modules package-lock.json \
	&& npm install --include=dev \
	&& npm run build
	npm prune --production

buildwatch:
	rm -rf dist node_modules package-lock.json \
	&& npm install --include=dev \
	&& npm run build:watch
		
purge:
	rm -rf dist node_modules package-lock.json build
	npm cache clean --force

# if running local development, run this command below
dev:
	rm -rf dist node_modules package-lock.json build \
	&& npm install --include=dev \
	&& npm run dev

devtest:
	rm -rf dist node_modules package-lock.json build \
	&& npm install --include=dev \
	&& npm run dev:watch
