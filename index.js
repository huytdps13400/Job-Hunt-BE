// Imported Libraries
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 8080; // Port on which our app will run

app.get("/", async (req, res) => {
  // get random user api using axios and show it on the page in json
  await axios
    .get("https://tiny-news-api.herokuapp.com/api/news") // API url which is getting data
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () =>
  console.log(`Application is running on http://localhost:${PORT}`)
);
