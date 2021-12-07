const fs = require('fs')

const getdata = fs.readFileSync('./info.txt','utf-8');
console.log(getdata)