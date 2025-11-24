//changing home page 

app.get("/", (req,res)=>{
    res.sendFile(__dirname,frontend/home.html)
})