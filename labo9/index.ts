const express = require('express');
const app = express();

app.set('port',3000);




app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('<p>Hello World</p>');
    })



app.listen(app.get('port'),
()=>console.log('[server] http://localhost:' + app.get('port')));
