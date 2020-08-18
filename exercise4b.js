const fs = require("fs");

const data = "hello";

fs.writeFile("test.html", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    // synchronise alternative to readFile
    console.log(fs.readFileSync("test.html", "utf8"));
  }
});
