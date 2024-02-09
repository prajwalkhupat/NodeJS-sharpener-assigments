const fs=require('fs')

const routesHandler=(req,res)=>{
    let url=req.url;
    let method=req.method;
    console.log(url)

    if(url==='/'){
    res.write('<html><body>hello welcome to node js</body></html>');
    res.write('<html><body>hello welcome to node js</body></html>');
    res.write("<html><body><form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='submit'></form></body></html>");
    return  res.end();
    }
    if(url==='/message'&&method==='POST') 
    {  
         const body=[];
        req.on('data',(chunk)=>{
              console.log(chunk);
              body.push(chunk)
        })
    return req.on('end',()=>{
             let parsedBody=Buffer.concat(body).toString();
             let message=parsedBody.split('=')[1];
             fs.writeFile('message.txt',message,(err=>{
                res.write('<html><body>msg recevied</body></html>');
                return  res.end();
            
             }));
          // res.write('<html><body>msg recevied</body></html>');
        })

    }
    res.write('<html><body>hello welcome to node js</body></html>');
    res.write('<html><body>hello welcome to node js</body></html>');
    res.write("<html><body><form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='submit'></form></body></html>");
    return res.end();
}

module.exports={
    routes:routesHandler,
    show:'hello'
}