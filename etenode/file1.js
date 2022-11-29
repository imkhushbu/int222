const fs = require("fs");
fs.readFile("./file10.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    console.log(" Parsed data", data);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});