const path = require("path");

// console.log(path.extname("./index.js")) ; //shows the extension name i.e.  .js

// const a = path.extname("./index.js");
// console.log(a);   //shows the extension name i.e.  .js

const b = path.basename("./NodeJS/index.js");
console.log(b);

const os = require("os");

console.log(os.freemem());
console.log(os.totalmem());



