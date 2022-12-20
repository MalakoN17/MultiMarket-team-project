const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');
const storeRoute= require("./routers/storeRouter.js")

app.use(cors());
app.use(express.json());

// ROUTERS
const storeRouter = require('./routers/storeRouter');
const userRouter = require('./routers/userRouter');
const departmentRouter = require('./routers/departmentRouter');
const couponRouter = require('./routers/couponRouter');
const orderRouter = require('./routers/orderRouter');
// const productRouter = require('./routers/productsRouter');
const sectionRouter = require('./routers/sectionRouter');
// const shippingCertificateRouter = require('./routers/shippingCertificateRouter');
const authRouter = require('./routers/authRouter');

app.use('/api/store', storeRouter);
app.use('/api/user', userRouter);
app.use('/api/department', departmentRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/order', orderRouter);
// app.use('/api/product', productRouter);
app.use('/api/section', sectionRouter);
// app.use('/api/shippingCertificate', shippingCertificateRouter);
app.use('/auth', authRouter);

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use('/store',storeRoute)

// const productRouter = require('./routers/productsRouter');
// app.use('/api/product', productRouter);

let port = 8000;
app.listen(port, () => {
  console.log(`server run on ${port}`);
});
