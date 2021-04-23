
var Fetch = require('node-fetch');

const getDogJokes = async ():Promise<string>=>{
    let page:number = 1;
    let pages:number = 1;
    let jokes:string = "";
for (page < pages; page++;) {

    let result = await Fetch(`https://icanhazdadjoke.com/search?term=dog&limit=5&page=${page}`, {
    headers: {
      'Accept': 'application/json'
    }
 })
 let response = await result.json();
  pages = response.total_pages;
  console.log(response);
  console.log(pages);
  console.log(page);
 response.results.forEach((joke: any) => {
    jokes += `${joke.joke}\n`;
 });    
}


return jokes;
}

let mopjes = getDogJokes().then(jokes =>{
    console.log(jokes);
});