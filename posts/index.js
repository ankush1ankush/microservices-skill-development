const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const routes = require("./route/routes")

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

app.listen(4000, () => {
    console.log("Listening on 4000")
})