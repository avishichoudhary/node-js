const http= require('http');

const server=http.createServer((req,res)=>{

if(req.url==='/'){
  res.end("We are at the home page!")
}

if(req.url=='/about'){
  res.end("Here is the short history babe!");
}

res.end(`<h1> oops 404 error</h1>`)

})

server.listen(5000)