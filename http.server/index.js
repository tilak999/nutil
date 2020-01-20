const cli = require('../commander');
const http = require('http');
const fs = require('fs')
const path = require('path')

cli.description('Simple Http server implemented using nodejs')
    .option('-p, --port [port number]', 'port which is used by server (default: 8080)', 8080);

// request handler
const handler = function (req, res) {
    if(req.url == '/favicon.ico') res.end()
    let currPath = '.' + req.url
    if(fs.existsSync(currPath)){
        if(!fs.lstatSync(currPath).isDirectory()){
            console.log('sending file...', currPath)
            const src = fs.createReadStream(currPath);
            src.pipe(res);
        } else {
            console.log('reading directory...', currPath)
            let content = `<h1>Index of ` + currPath + `</h1>`
            fs.readdirSync(currPath).forEach((item)=>{
                content += `<a href="`+path.join(req.url, item)+`">`+item+`</a><br>`
            })
            res.writeHead(200, {'content-type':'text/html'});
            res.write(content);
            res.end();
        }
    } else {
        res.end()
    }
}

module.exports = function(args){
    cli.parse(args)
    http.createServer(handler).listen(cli.port);
    console.log(`Server is running on http://localhost:`+ cli.port)
}