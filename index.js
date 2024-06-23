const express = require("express");
const app = express();


const port=8080;
app.set("view engine","views");

app.use(express.static("public"));


app.get("/home",(request,response)=>{
    response.render("portfolio/home.ejs");
})

app.get("/about",(request,response)=>{
    response.render("portfolio/about.ejs");
})
app.get("/projects",(request,response)=>{
    response.render("portfolio/projects.ejs");
})
app.get("/",(request,response)=>{
      response.send("No page found");
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});