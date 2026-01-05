import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

console.log("Type:", typeof pdf);
console.log("Has default:", 'default' in pdf);
console.log("Default type:", typeof pdf.default);
const fs = require('fs');
fs.writeFileSync('keys_full.txt', JSON.stringify(Object.keys(pdf), null, 2));
