const express = require("express")
const router = express.Router();
const axios = require("axios")

router.post('/event', async(req,res)=>{
    try{
    await axios.post('http://localhost:4040/event',req.body);
    await axios.post('http://localhost:4000/event',req.body);
    await axios.post('http://localhost:4001/event',req.body);
    res.send({status:'ok'});
    }catch(e){

       console.log(e)
    }
});


module.exports = router;

