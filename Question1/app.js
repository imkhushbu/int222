const fs = require('fs');

fs.writeFileSync("./demo.txt", "Hello this content is from demo.txt file.");
const data = fs.readFileSync("./demo.txt").toString();
console.log("Read from file demo.txt");

fs.writeFileSync("./copy.txt", data);
console.log("Copied data from demo.txt to copy.txt");

fs.unlinkSync("./demo.txt");
console.log("Deleted demo.txt");