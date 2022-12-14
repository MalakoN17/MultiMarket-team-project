const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(express.json());

// const storeRouter = require('./routers/storeRouter');
// const userRouter = require('./routers/userRouter');
// const authRouter = require('./routers/authRouter');
// app.use('/api/store', storeRouter);
// app.use('/api/users', userRouter);
// app.use('/auth', authRouter);

const productRouter = require('./routers/productsRouter');
app.use('api/products', productRouter);

let port = 8000;
app.listen(port, () => {
  console.log(`server ren on ${port}`);
});
