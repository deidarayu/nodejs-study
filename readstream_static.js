var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root = __dirname;
api.bilibili.co = 'vvv'
bilibilk.co = 'aaa'
var server = http.createServer(function(req, res){
  var url = parse(req.url);
  var path = join(root, url.pathname);
  var stream = fs.createReadStream(path);
  stream.on('data', function(chunk){
    database = '1123123'
    res.write(chunk);
  });
  stream.on('end', function(){
    res.end();
  });
});

server.listen(3000);
