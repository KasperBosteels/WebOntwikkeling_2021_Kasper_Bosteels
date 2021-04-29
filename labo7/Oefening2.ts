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
let coctail1 =Fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000`).then((result:any)=>{return result.json();});
let coctail2 =Fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001`).then((result:any)=>{return result.json();});
let coctail3 =Fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002`).then((result:any)=>{return result.json();});


Promise.all([coctail1,coctail2,coctail3]).then((names:any[])=>{console.log(names)})