var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'})
    res.write("Line 1")
    res.write("Line 2")
    res.write("Ho gaya kaam")
    res.end("done")
}).listen(3000);
console.log("Server is running at http://127.0.0.1:3000");