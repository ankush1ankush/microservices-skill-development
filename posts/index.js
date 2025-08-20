const express = require("express")
const bodyParser = require("body-parser")

const routes = require("./route/routes")
const app = express()
const cors = require("cors")

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(4000, () => {
    console.log("Server is running on port 4000")
    console.log("You can access the API at http://localhost:4000")
    console.log("Listening on 4000")
})
