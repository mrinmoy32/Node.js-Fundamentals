// const pokemon = require("pokemon");

// console.log(pokemon.random()); 

const http = require("http");
const fs = require("fs");

const PORT = 2000;
const hostname = "localhost"
const home = fs.readFileSync("./index.html", "utf-8");

// http.createServer((req, res, next)=>{

//     req.url()
//     res.end("Working")

// })

const server = http.createServer((req, res) => {

    if (req.url === "/about") {
        return res.end("<h1>About Page<h1>");
    }
    if (req.url === "/contact") {
        return res.end("<h1>contact Page<h1>");
    }
    if (req.url === "/") {
        return res.end(home);
    }
    else {
        return res.end("404 page not found")
    }

});

server.listen(PORT, hostname, () => {
    console.log(`server is working on http://${hostname}:${PORT}`);
})

