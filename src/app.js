const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');

  let {url} = req;
  // let url = req.url

  if(url === "/"){
    res.end("Home")
  }
  else if(url === "/posts"){
    res.send("liste des articles")
  }
  
});

server.listen(port, hostname);
