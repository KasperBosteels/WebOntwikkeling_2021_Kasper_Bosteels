import { start } from "node:repl";

interface Pokemon {
    name: string
    xp: number
    type: string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 : Pokemon[]  = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];

let starters:Pokemon[] = [...starterPokemonGen1,...starterPokemonGen2];
console.log(starters);

let names:string[] = starters.map(pokemon=>pokemon.name);
console.log(names);

let weakPokemon:Pokemon[] = starters
    .filter(pokemon=>pokemon.xp < 40);
console.log(weakPokemon);

let weakPokemonNames:string[] = starters
    .filter(starter=>starter.xp < 40 )
    .map(pokemon=>pokemon.name);
console.log(weakPokemonNames);

let sumOfAllXp:number = starters.reduce((sum,pokemon)=>sum + pokemon.xp,0);
console.log(sumOfAllXp);

let strongestPokemon:Pokemon = starters
    .reduce((pokemon1,pokemon2)=>{
      return (pokemon1.xp > pokemon2.xp) ? pokemon1 : pokemon2
    },
    {name: '', xp: -100, type: ''},
    );
console.log(strongestPokemon);

let sumofAllXpOfWeakpokemon:number = weakPokemon
    .reduce((som,pokemon)=>som + pokemon.xp, 0); 
console.log(sumofAllXpOfWeakpokemon);

let sortedStarters:Pokemon[] = starters
    .sort((pokemon1,pokemon2)=>{
        if(pokemon1.xp < pokemon2.xp)return -1;
        if(pokemon1.xp > pokemon2.xp)return 1;
        if(pokemon1.xp == pokemon2.xp){
        const name1 = pokemon1.name.toUpperCase();
        const name2 = pokemon2.name.toUpperCase();
        if(name1 < name2)return -1;
        if(name1 > name2)return 1;    
        }
        return 0;
});
console.log(sortedStarters);
