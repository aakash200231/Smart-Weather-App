const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8080;


//public static path
const static_path = path.join(__dirname,"/public");
 app.use(express.static(static_path));

const view_path = path.join(__dirname,"/templates/views");
const partial_path = path.join(__dirname,"/templates/partials"); 

app.set('views', view_path);  
app.set("view engine","hbs"); 
hbs.registerPartials(partial_path);


//routing
app.get("",(req,res) =>{
    res.render("index");
});
app.get("/about",(req,res) =>{
    res.render("about");
});
app.get("/weather",(req,res) =>{
    res.render("weather");
});
 app.get("*",(req,res) =>{
     res.render("404error",{
        errorMsg : 'Oops! Page Not Found' 
     });
 });

app.listen(port, () =>{
    console.log(`listning to the ${port}`);
});