const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

const storeRouter = require('./routers/storeRouter');
app.use('/api/store', storeRouter);

// const productRouter = require('./routers/productsRouter');
// app.use('/api/product', productRouter);

let port = 8000;
app.listen(port, () => {
  console.log(`server ren on ${port}`);
});
