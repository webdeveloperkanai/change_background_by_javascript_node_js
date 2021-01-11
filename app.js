var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

            if(req.url = '/') {
                fs.readFile("background.ejs",function(error,options){
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.write(options);
                    res.end();
                })
            } 

});

    server.listen(1980);
    console.log("Server running");