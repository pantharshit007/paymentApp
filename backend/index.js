const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Database = require('./config/database')
const rootRouter = require('./routes/rootRouter')

const app = express();

app.use(cors());
app.use(express.json());
// Root Route
app.use('/api/v1', rootRouter)

app.get("/", (req, res) => {
    res.json({
        msg: "Hi Mom!",
    })
})


app.listen(PORT, () => {
    console.log("> Listening on port " + PORT);
})

Database.connect();

