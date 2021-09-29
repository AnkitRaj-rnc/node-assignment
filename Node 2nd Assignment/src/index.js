const path = require("path")
const hbs = require("hbs")
const express = require("express")
const app = express();

app.set("view engine", "hbs")

const partialPath= path.join(__dirname, "../partials") 
hbs.registerPartials(partialPath)

const static = path.join(__dirname, "../public")
app.use(express.static(static))


app.get("/portfolio", (req, res) => {
    res.render("index", {
        name:req.query.name
    })
})

app.listen(8080,()=>{
    console.log("Starting the server")
})