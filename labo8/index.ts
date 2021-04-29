import { ADDRGETNETWORKPARAMS } from "node:dns";

const express = require('express');
const app = express();
const Ftch = require('node-fetch')

const thisisme = {
    name: "Kasper Bosteels",
    Age: 23,
    ProfilePic: "https://previews.123rf.com/images/dtiberio/dtiberio1801/dtiberio180100202/93064324-stressed-old-person.jpg"
};


let pikachu:any ={};
    let GetPikachu = Ftch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response:any)=> response.json())
    .then((json:JSON) =>{
        pikachu = json;
    });
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
    
    res.type('application/json');
    res.json(pikachu)
})

app.get('/pickachuhtml',(req:any,res:any)=>{
    res.type('text/html');
    res.send(`<html>
    <body>
        <header>
            <title>${pikachu.name}</title>
            <h3>name:${pikachu.name}</h3>
        </header>
        <p>type ${pikachu.types[0].type.name}</p>
        <img src=${pikachu.sprites.other.dream_world.front_default} alt="" srcset="">
    </body>
    </html>`)
})


app.listen(app.get('port'),
()=>console.log('[server] http://localhost:' + app.get('port')));









