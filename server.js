const http = require("http")


const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
})
server.listen(3000 , () => {
    console.log("sever Running on port 3000");
})