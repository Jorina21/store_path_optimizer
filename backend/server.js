const express = require("express"); 
const path = require("path"); 
const config = require("./config");  //going to import this 

const app = express();

//Serve static files 
app.use(express.static(config.FRONTEND_DIR));

//ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(config.PAGES_DIR, "home.html"));
}); 

app.get("/login", (req,res) => {
    res.sendFile(path.join(config.PAGES_DIR, "login.html"));
});

app.get("/options", (req, res) => {
    res.sendFile(path.join(config.PAGES_DIR, "options.html"))
})

app.get("/sign_up", (req, res) => {
    res.sendFile(path.join(config.PAGES_DIR, "signup.html"))
})

//start server
app.listen(config.PORT, () => console.log("server is running at http://localhost:${config.PORT}")
); 
