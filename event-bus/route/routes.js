const express = require("express")
const router = express.Router();
const axios = require("axios")

router.post('/event', async(req,res)=>{
    try{
    await axios.post('http://posts-service:4000/event',req.body);
    await axios.post('http://comments-srv:4040/event',req.body);
    await axios.post('http://query-srv:4001/event',req.body);
    await axios.post('http://moderation-srv:4003/event',req.body);
    res.send({status:200});
    }catch(e){
       console.log(e)
    }
});


module.exports = router;

