const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    
    if(url==='/')
    {
        const data1 = [];
        const read = fs.readFile('./writingAndReadingFromAFileDemo/message.txt', (err,data) => {
            
            data1.push(data);
            
            if(err)
                console.log(err);
            else{
                const parsedData = Buffer.concat(data1).toString();
                res.write('<html>');
                res.write('<head><title>My First Page</title></head>');
                res.write(`<body><h1>${parsedData}</h1><form action="/msg" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>`);
                res.write('</html>');
                return res.end();
                
            }             
        })
      
    }
    
    if(url === '/msg' && method === 'POST' ){

        const body = [];

        req.on('data', (chunk) => {     //this cb fn will be execeuted for every incoming data. Here listening for incoming data
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('./writingAndReadingFromAFileDemo/message.txt', message, error => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });      
        
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body><h1>Hello from my first Node.js Server</h1></body>`);
    res.write('</html>');
    //res.end();

}

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard code text'
// };

module.exports.handler = requestHandler;
module.exports.someText= 'Some hard code text';