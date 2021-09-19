const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname,"../public"); 
// console.log(path.join(__dirname,"../public"))
const templatePath = path.join(__dirname,"../templates/views"); 
const partialsPath = path.join(__dirname,"../templates/partials"); 

app.set("view engine","hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


app.get("", (req,res) => {
    res.render("index");
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.get("/weather", (req,res) => {
    res.render("weather");
})

app.get("*", (req,res) => {
    res.render("404error",{
        errorMsg: "Opps! Page Not Found"
    });
})

app.listen(port, () => {
    console.log(`Listening to the port at ${port}`);
})