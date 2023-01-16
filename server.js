let express = require("express");
 
let app = express()

app.use("/signIn", async (req, res) =>  {
    await sleep(3000);
    res.json({
        "name": "Samet",
        "surname": "Ronaer",
    });
});

app.use("/", (req, res) => {
    res.send("<h1> Hello </h1>");
});
app.listen(3000, () => {
    console.log("Server listen at 3000 port")
});

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }