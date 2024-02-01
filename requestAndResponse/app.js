const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    }
    if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
    }
    if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>About Us Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
    }
    if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>Node Js Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    }
    res.end();
})

server.listen(4000);