const Messages = require("../models/messageSchema");

const addMessage = async (req, res, next) => {
    try {
      const { users, sender, message } = req.body;
      console.log(req.body);
      const data = await Messages({message,users,sender});
       await  data.save()
  
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
          message: msg.message.text,
        }
      });
    res.json(projectedMessages);
    }catch(ex){
      next(ex)
    }
  }


  module.exports = {addMessage, getAllMessage}