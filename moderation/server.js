const http = require("http")

const routeManager = require("./routes")


const PORT = 4003;

const server = http.createServer(routeManager);


server.listen(PORT,()=>{
 console.log("Moderation server is running at the port number 4003")
})