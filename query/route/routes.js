const express = require("express")
const router = express.Router();

const posts = {}

router.get("/all-posts", (req, res) => {
    res.send(posts)
})

router.post('/event',(req,res)=>{
   const event = req.body?.event;
   const data = req.body?.data;
   if(event === "postCreated"){
    posts[data?.postId] = {
                      ...data,
                      comments: []
                  }
   }
   if(event === "commentCreated")
   {  
      const data = req.body?.data;
      const postId = data?.postId;
      const commentData = data?.commentData;
      if( posts[postId]?.comments){
         posts[postId] = {
                           ...posts[postId],
                           comments: [...posts[postId]?.comments, commentData ]
                         }
     }
   
   }
   console.log(posts)
   res.status(200).send({message: "data saved in the query"})
})

module.exports = router;