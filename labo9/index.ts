const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('port',3000);
app.use(express.static(__dirname+'/static'));


app.get('/',(req:any,res:any)=>{
    res.render('./landing')
})

app.get('/movies',(req:any,res:any)=>{
    res.render('./movies')
})

app.get('/movie/:index',(req:any,res:any)=>{
    let index = req.params.index;
    res.render('./movie',{
        number: index
    })
})


app.listen(app.get('port'),
()=>console.log('[server] http://localhost:' + app.get('port')));
