const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(cors());
const routes = require("./route/routes")

app.use(bodyParser.json());

app.use("/", routes);

app.listen(4005, () => {
    console.log("Listening on 4005")
})