// docs: https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
const fs = require("fs");
fs.writeFile("test.html", "Hello World!", function (err) {
  if (err) return console.log(err);
  console.log("test.html successfully created");
});
