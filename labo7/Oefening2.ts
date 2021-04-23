var Fetch = require('node-fetch');

const getCoctail = async (id:number):Promise<string> =>{
    let result:any = await Fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    let response:any = await result.json();
    return response.drinks[0].strDrink;
}
getCoctail(11000).then(name =>{
    console.log(name);
});
getCoctail(11001).then(name=>{
    console.log(name);
});
getCoctail(11002).then(name =>{
    console.log(name);
});

