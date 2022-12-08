const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(express.json());

const storeRouter = require('./routers/storeRouter');
const couponRouter = require('./routers/couponRouter.js');
const departmentRouter= require('./routers/departmentRouter.js')

app.use('/api/store', storeRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/department',departmentRouter)

let port = 8000;
app.listen(port, () => {
  console.log(`server ren on ${port}`);
});
