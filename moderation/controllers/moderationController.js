const parseBody = require("../utils/parseBody");

module.exports = async (req , res) =>{
   try{
   const body = await parseBody(req)
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   const {event, data} = body ;
   if(event==="commentCreated"){
       const status = data.commentData.content.includes("orange")?"rejected":"approved";
       const newdata = {
            event : "commentModerated",
            data:{...data , commentData :{...data?.commentData, status:status }}
       }
       const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(newdata)
       }
       await fetch("http://eventbus:4005/event",config)
    }
    res.end(JSON.stringify({ message: 'modration event produce' }));
   }catch(error){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Internal server error' }));
      
   }
   
}