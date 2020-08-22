const fs = require('fs');
const path = require('path');

const base = {
  production: true,
  apiurl: process.env.APIURL
};
const config = `export const environment = ${JSON.stringify(base)};`;

fs.writeFileSync(path.join(
  __dirname,
  "src/environments/environment.prod.ts"
), config);
