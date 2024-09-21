const http=require('http');


const server=http.createServer((req,res)=>{


   
    
    
     res.writeHeader(200,{'Content-Type':'text/html'});

     const url = req.url;
 
     if (url === '/about') {
         res.write(' Welcome to about us page');
         res.end();
     }
     else if (url === '/contact') {
         res.write(' Welcome to contact us page');
         res.end();
     }
     else {
         res.write('Hello World!');
         res.end();
     }
    //  res.end("<h2 style='color:red'>Welcome to backend </h2>");

     

}).listen(5000,()=>{
    console.log("Backend started here ");
    // console.log(assert);
});
