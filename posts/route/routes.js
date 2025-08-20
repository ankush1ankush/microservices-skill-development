const express = require("express")
const router = express.Router();
const {randomBytes} = require("crypto")
const axios = require("axios")

const posts = {}

router.get("/posts", (req, res) => {
    res.send(posts)
})

router.post("/posts", async (req, res) => {
    console.log("test")
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = {
       id,title
    }
    await axios.post("http://eventbus:4005/event",{event:"postCreated", data:{ postId : id , title:title}})
    res.status(201).send(posts);
})
router.post('/event',(req,res)=>{
   console.log(req.body);
   res.send({status:'ok'});
})
module.exports = router;