const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');
const storeRoute = require("./routers/storeRouter.js")

app.use(cors());
app.use(express.json());

app.use("/api/store", storeRoute);



let port = 8000;
app.listen(port, () => {
  console.log(`server ren on ${port}`);
});
