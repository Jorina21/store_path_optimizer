const path = require("path"); 

module.exports = {
    port: 3000, 
    FRONTEND_DIR: path.join(__dirname, "../frontend"),
    PAGES_DIR: path.join(__dirname, "../frontend/pages")
};