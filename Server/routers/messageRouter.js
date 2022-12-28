const { addMessage, getAllMessage } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addMsg/", addMessage);
router.post("/getMsg/", getAllMessage );

module.exports = router;
