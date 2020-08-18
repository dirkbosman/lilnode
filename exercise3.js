// docs: https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
const fs = require("fs");
fs.readFile("test.html", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
