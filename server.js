var http = require('http');

var port = process.env.PORT || 8080;

var content = "\
<html>\
<head>\
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' integrity='sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7' crossorigin='anonymous'>\
</head>\
<body>\
<div style='text-align: center; padding: 40px 15px; background: blue;'>\
<h1>Hello !</h1>\
<h2>I'm alive !</h2>\
</div>\
</body>\
</html>\
";

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(content);
}).listen(port);

console.log("Server running on port " + port);
