//#region express
const express = require('express');
const app = express();
const ejs = require('ejs');
//#endregion

//#region mongodb
const mongodb:String ="mongodb+srv://test_user:thisisatest@webontwikkelingcluster.eiiyi.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority"
const {MongoClient} = require('mongodb');
const client = new MongoClient(mongodb,{useUnifiedTopology:true});
//#endregion

//#region mongodb app set
app.set('view engine', 'ejs');
app.set('port',3000);
app.use(express.static(__dirname+'/static'));
//#endregion

//#region  interface movie
interface movie {
    name:string;
    myScore:number;
    timesViewed:number;
    imdb:Number;
}
//#endregion

//#region find all movies
var arrayOfMovies:Promise<movie[]>;
var otherarray:movie[];
const findAllMovies = async ():Promise<movie[]> =>{
    try{
        await client.connect()   
        let cursor = await client.db('WebOntwikkeling').collection('Movies').find({});
        let result:movie[] = await cursor.toArray();
        console.log(result);
        otherarray = result;
        return Promise.resolve(result);
    }
    catch(err){
        console.log(err);
        Promise.reject(null);
    }
    finally{
        await client.close();
        console.log('connection closed');
    }
    return Promise.reject(null);
}
//#endregion
const removeonemovie = async (index:number,arrayM:movie[]):Promise<boolean> =>{
    let nameMovie:string = arrayM[index].name;
    let filter = {name: nameMovie};
    try{
        await client.connect()   
        let cursor = await client.db('WebOntwikkeling').collection('Movies').deleteOne(filter);
        Promise.resolve(true);
    }
    catch(err){
        console.log(err);
        Promise.reject(false);
    }
    finally{
        await client.close();
        console.log('connection closed');
    }
    return Promise.reject(false);
}

app.get('/',(req:any,res:any)=>{
    res.render('./landing')
})

app.get('/movies',(req:any,res:any)=>{
    console.log("movie array",arrayOfMovies);
    console.log('otherarray', otherarray);
    res.render('./movies',{moviearray:otherarray})
})

app.get('/movie/:index',(req:any,res:any)=>{
    let index:number = req.params.index;
    res.render('./movie',{
        number: index,
        moviearray:otherarray
    })
})
app.get('/removemovie/:index',(req:any,res:any)=>{
    let index:number= req.params.index;
    let succes =removeonemovie(index,otherarray)
    if(succes)console.log("removed movie");
    res.render('./removemovie',{
        number:index
    })
    findAllMovies();
})
app.listen(app.get('port'),
()=>{
     arrayOfMovies = findAllMovies();
    console.log('[server] http://localhost:' + app.get('port'))
});

