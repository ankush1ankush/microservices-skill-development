
const moderation = require("./moderation")

const routeManager = (req,res)=>{
    const {url , method} =req;
    
    if(method === "POST" && url === "/event"){
        moderation(req,res);
    }
}

module.exports = routeManager;