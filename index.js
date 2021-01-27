const express = require('express')
const app = express()
const port = process.env.PORT || 3010
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")
app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    res.status(200).render("index")
})
app.get("/about",(req,res)=>{
    res.status(200).render("about")
})

app.get("/marketing",(req,res)=>{
    res.status(200).render("marketing")
})
app.get("/blog",(req,res)=>{
    res.status(200).render("blog")
})
app.get("/contact",(req,res)=>{
    res.status(200).render("contact")
})
app.get("/register",(req,res)=>{
    res.status(200).render("register")
})
app.get("/login",(req,res)=>{
    res.status(200).render("login")
})

app.listen(port,()=>{
    console.log(port);
})    