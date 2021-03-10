



//#region deel 1
interface Movie {
    "title": string,
    "year": number,
    "actors": string[],
    "metascore": number,
    "seen": boolean
}
let thematrix:Movie ={
    title: "The Matrix",
    year: 1999,
    actors: ["Keano Reeves","Laurence Fishburne","Carrie-Anne Moss"],
    metascore: 73,
    seen: true
};
let Myfavoritemovie:Movie ={
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    actors: ["Elijah Wood","Viggo Mortensen","Ian Mckellen"],
    metascore: 94,
    seen: true
}
let myworstmovie:Movie ={
    title: "The Room",
    year: 2003,
    actors:["Tommy Wiseau","Juliette Danielle","Greg Sestero"],
    metascore: 9,
    seen: true
}
//#endregion

//#region  deel 2
let  wasMovieMadeInThe90s : wasMovieMadeInThe90s = (movie:Movie) =>{
if(movie.year > 1980 && movie.year < 2000){
    return true;
}else {
    return false;
}
}
console.log(wasMovieMadeInThe90s(thematrix));
console.log(wasMovieMadeInThe90s(Myfavoritemovie));

let averageMetaScore: averageMetaScore  = (movies:Movie[]) =>{
    let average = 0;
    movies.forEach(movie => {
        average += movie.metascore;
    });
    return average / movies.length;
}
console.log(averageMetaScore([thematrix,myworstmovie,Myfavoritemovie]));

let fakeMetascore:fakeMovie =(movie:Movie,newscore:number)=>{
    let newmovie:Movie ={
        title: movie.title,
        year: movie.year,
        actors: movie.actors,
        metascore: newscore,
        seen: movie.seen        
    }
    return newmovie;
}
let fakemovie = fakeMetascore(myworstmovie,99.9);
console.log(fakemovie)
//#endregion

//#region deel 3
interface wasMovieMadeInThe90s {
    (movie:Movie): boolean
}
interface averageMetaScore {
    (movies:Movie[]):number
}
interface fakeMovie {
    (movie:Movie,fakescore:number): Movie
}
//#endregion