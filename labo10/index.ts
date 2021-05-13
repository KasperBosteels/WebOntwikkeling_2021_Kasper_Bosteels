const mongodb:String ="mongodb+srv://test_user:thisisatest@webontwikkelingcluster.eiiyi.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority"
const {MongoClient} = require('mongodb');
const client = new MongoClient(mongodb,{useUnifiedTopology:true});
interface movie {
    name:string;
    myScore:number;
    timesViewed:number;
}
//movies
/*
let movies: Array<movie>= [
    {name: "The Matrix", myScore: 90,timesViewed:10},
    {name: "Pulp Fiction", myScore: 100,timesViewed:100},
    {name: "Monster Hunter",myScore:5,timesViewed:1},
    {name: "Blade Runner", myScore:100,timesViewed:30},
    {name: "Austin Powers", myScore:80,timesViewed:10},
    {name: "Jurasic Park 2", myScore:40, timesViewed:1},
    {name: "Ichi the Killer", myScore:80,timesViewed:1}
];
*/
//insertData
/*
const insertData = async (movies:Array<movie>):Promise<any>=>{
    try{
        await client.connect();
        await client.db('WebOntwikkeling').collection('Movies').insertMany(movies);
        console.log('inserted movies');
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('closed connection');
    }
}
//Connection();
insertData(movies);
*/

//#region find First Movie
const FindFirstMovie = async ():Promise<any>=>{
    try{
        await client.connect()   
        let FirstMovie:any = await client.db('WebOntwikkeling').collection('Movies').findOne({});
        console.log(`FIRST MOVIE: ${FirstMovie.name}`);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('connection closed');
    }
}
//#endregion

//#region find all movies
const findAllMovieScores = async ():Promise<any>=>{
    try{
        await client.connect()   
        let cursor = await client.db('WebOntwikkeling').collection('Movies').find({});
        let result = await cursor.toArray();
        let myScores:string = `movie scores:\n`
        let views:number = 0;

        for (let i = 0; i < result.length; i++) {
            views += result[i].timesViewed;
            myScores += `${result[i].name} - ${result[i].myScore}\n`;   
        }
        console.log(myScores);
        console.log(`total views: ${views}`);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('connection closed');
    }
}
//#endregion

//#region find movies filtered
const findMoviesFiltered = async ():Promise<any>=>{
    try{
        await client.connect()   
        let cursor = await client.db('WebOntwikkeling').collection('Movies').find({myScore:{$gt:30,$lt:85}});
        let result = await cursor.toArray();
        console.log(result);
        
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('connection closed');
    }
}
//#endregion

//#region find movies filtered with OR
const findMoviesFilteredWithOR = async ():Promise<any>=>{
    try{
        await client.connect()   
        let cursor = await client.db('WebOntwikkeling').collection('Movies').find({$or:[{myScore:{$gt:30,$lt:85}},{timesViewed:1}]});
        let result = await cursor.toArray();
        console.log(result);
        
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('connection closed');
    }
}
//#endregion
findMoviesFilteredWithOR();

