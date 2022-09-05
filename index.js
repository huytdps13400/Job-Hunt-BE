// Imported Libraries
const express = require("express");

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};
const sqlServer = await sql.connect(sqlConfig);

const app = express();
const PORT = process.env.PORT || 8080; // Port on which our app will run
//call api
app.get("/", async (req, res) => {
  try {
    const result =
      await sqlServer.query`select * from mytable where id = ${value}`;

    console.dir(result);
  } catch (error) {
    console.error(error);
  }

  // get random user api using axios and show it on the page in json
});

app.listen(PORT, () =>
  console.log(`Application is running on http://localhost:${PORT}`)
);
