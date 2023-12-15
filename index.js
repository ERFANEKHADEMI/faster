const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/views"));
app.use("/public", express.static(__dirname + "/public"));

app.listen(3000, ()=>{
    console.log("listening at :3000");
});