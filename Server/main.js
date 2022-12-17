const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');
const depatemrntRoute = require('./routers/departmentRouter.js')

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/api/department',depatemrntRoute);



let port = 8000;
app.listen(port, () => {
  console.log(`server ren on ${port}`);
});
