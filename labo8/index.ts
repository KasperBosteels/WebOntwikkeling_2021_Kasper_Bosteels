const express = require('express');
const app = express();
const thisisme = {
    name: "Kasper Bosteels",
    Age: 23,
    ProfilePic: "https://previews.123rf.com/images/dtiberio/dtiberio1801/dtiberio180100202/93064324-stressed-old-person.jpg"
};
app.set('port',3000);
app.get('/',(req:any,res:any)=>{
res.type('text/html');
res.send('<header><titel>Dark Satanic Mills</title><p>written by William Blake, 1804</p></header>')
})
app.get('/whoami',(req:any,res:any)=>{
    res.type('text/html');
    res.send(`<p>my name is ${thisisme.name} and i am  ${thisisme.Age} years old</p><img src="${thisisme.ProfilePic}" alt="" srcset="">
    `);
    })
    app.get('/whoamijson',(req:any,res:any)=>{
        res.type('application/json');
        res.json(thisisme)
        })
        app.get('/pickachujson',(req:any,res:any)=>{
            res.type('text/html');
            res.jsend('Hello <strong>World</strong>')
            })
            app.get('/pickachuhtml',(req:any,res:any)=>{
                res.type('text/html');
                res.send('Hello <strong>World</strong>')
                })
app.listen(app.get('port'),
()=>console.log('[server] http://localhost:' + app.get('port')));









