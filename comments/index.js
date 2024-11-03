const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const router = require("./route/routes")

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

app.listen(4040, () => {
    console.log("listenning to port number 4040");
})
