const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/database');
const socket = require('socket.io')


app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// ROUTERS
const storeRouter = require('./routers/storeRouter');
const userRouter = require('./routers/userRouter');
const departmentRouter = require('./routers/departmentRouter');
const couponRouter = require('./routers/couponRouter');
const orderRouter = require('./routers/orderRouter');
const productRouter = require('./routers/productsRouter');
const sectionRouter = require('./routers/sectionRouter');
const authRouter = require('./routers/authRouter');
const adminStoreRouter = require('./routers/adminStoreRouter')
const messageRouter = require('./routers/messageRouter')
const stripeRouter = require('./routers/stripeRouter')


app.use('/api/store', storeRouter);
app.use('/api/user', userRouter);
app.use('/api/department', departmentRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/order', orderRouter);
app.use('/api/product', productRouter);
app.use('/api/section', sectionRouter);
app.use('/auth', authRouter);
app.use('/api/stripe', stripeRouter)  
app.use('/api/ownerStore', adminStoreRouter);
app.use('/api/messages', messageRouter);



const port = 8000;

const server = app.listen(port, () => {
  console.log(`server run on ${port}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});


global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  
  socket.on("send-msg", (data) => {
    console.log('sendMsg', {data});
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.message);
    }
  });
});
