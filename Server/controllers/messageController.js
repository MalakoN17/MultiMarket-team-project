const Messages = require("../models/messageSchema");

const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: message ,
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};

  
 const getAllMessage= async (req, res, next) => {
  try{
    const {from,to} = req.body;
    const messages = await Messages.find({
      users:{
        $all: [from,to],
      },
    })
    .sort({ updatedAt: 1});

    const projectedMessages = messages.map((msg) => {
      return{
        fromSelf: msg.sender.toString() === from,
        message: msg.message,
      }
    });
  res.json(projectedMessages);
  }catch(ex){
    next(ex)
  }
}


  module.exports = {addMessage, getAllMessage}