
var Fetch = require('node-fetch');

const getDogJokes = async ()=>{
    let pagenumber:number = 1;
    while(){
        let response = await fetch(`https://icanhazdadjoke.com/search?term=dog&limit=5&page=${pagenumber}`,{
            headers: {
                'Accept': 'application/json'
            }
        });
        let json =await response.json();
        json.results.forEach((j:any) => console.log(j.joke));
        if(json.next_page >= pagenumber){break;}
        pagenumber++;
    }
   
}
export{};

let mopjes = getDogJokes().then(jokes =>{
    console.log(jokes);
});