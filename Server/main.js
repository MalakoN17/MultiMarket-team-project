const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(express.json());

const storeRouter = require('./routers/storeRouter');
app.use('/api/store', storeRouter);

const couponRouter = require("./routers/couponRouter.js")
let port = 8000;
app.listen(port, () => {
  console.log(`server ren on ${port}`);
});
app.use('/api/coupon',couponRouter)