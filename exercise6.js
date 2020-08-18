const axios = require("axios").default;

// Make a GET request
// axios({
//   method: "get",
//   url: "https://google.com",
// });

axios
  .all([
    axios.get("https://api.github.com/users/hacktivist123"),
    axios.get("https://api.github.com/users/adenekan41"),
  ])
  .then((response) => {
    console.log("Date created: ", response[0].data.created_at);
    console.log("Date created: ", response[1].data.created_at);
  });
