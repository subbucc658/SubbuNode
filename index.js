const express = require("express");

const app = new express();
app.use(express.json());
const customer = require("./controller/customerController");
app.use("/api/customer",customer);

console.log(app.get("env"))




app.listen(3000,() => {
    console.log("Listening on Port 3000");
});



