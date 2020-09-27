const https = require('https');
const scrape = require('website-scraper');

const options = {
  urls: [
    'http://book.realworldhaskell.org/read/'
  ],
  directory: './output/',
  recursive: true,
  maxRecursiveDepth: 2,
};

(async () => {
  await scrape(options);
})();
