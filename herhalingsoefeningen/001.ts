import { Agent } from "node:http";
import { prependOnceListener } from "node:process";

//#region 1
let g:number[] = [1,2,3,4,5,6,7,8,9,10,11,2,3,4,5,6,47,50,45,23,15,48,6,483,21,5,34,8,46,423,54,486,4,53,51];
interface IZoekgetal{
    (g:number[],getal:number):number
}

let Zoekgetal:IZoekgetal =(g,getal)=>{
for (let i = 0; i < g.length; i++) {
    if (getal == g[i]) return i;
}
return -1;
}
console.log(Zoekgetal(g,51));
console.log(Zoekgetal(g,47));
//#endregion

//#region 2
interface IzoekPersnonsMetLeeftijd{
    (personen:person[],leeftijd:number):person[]
}
interface person{
    name:string,
    age:number
}
let personen:person[]=[
    {name:'adnie',
    age:50},
    {name:'anrike',
    age:75},
    {name:'TINA',
    age:13},
    {name:'kaaaaarl',
    age:13},
    {name: 'bob belcher',
    age:39}
];
let ZoekPersnonsmetLeeftijd:IzoekPersnonsMetLeeftijd =(personen,leeftijd)=>{
let people:person[] =[];
personen.forEach(P => {
    if(P.age == leeftijd)people.push(P);
});
return people;
}
console.log(ZoekPersnonsmetLeeftijd(personen,13))
//#endregion

//#region 3
interface Igemiddeldeleeftijd{
    (personen:person[]):number
}
let BerekenGemmiddeldeLeeftijd:Igemiddeldeleeftijd =(personen)=>{
    let tmp:number=0;
    personen.forEach(p => {
        tmp += p.age;
    });
    return tmp/personen.length;
}
console.log(BerekenGemmiddeldeLeeftijd(personen));
//#endregion

//#region 4
interface IHoogsteLeeftijd {
    (personen:person[]):person
}
let HoogsteLeeftijdPersoon:IHoogsteLeeftijd=(personen)=>{
    let oldperson:person = personen[0];
    for (let i = 0; i < personen.length; i++) {
        if(personen[i].age > oldperson.age)oldperson = personen[i];
    }
    return oldperson;
}
console.log(HoogsteLeeftijdPersoon(personen));
//#endregion

//#region 5
interface IPrintAllePersonen{
    (personen:person[],print?:PrintPersoon):void
}
//#endregion

//#region 6
let PrintAllePersonenReversed:IPrintAllePersonen = ()=>{
    personen.forEach(p => {
        console.log(p.age,' ',p.name);
    });
}
PrintAllePersonenReversed(personen);
//#endregion

//#region 7
let PrintAllePersonenRed:IPrintAllePersonen = ()=>{
    personen.forEach(p => {
        if (p.age >= 70) {
            console.log(p.name," ",`%c ${p.age}`,"color:red;");
        }else{
            console.log(p.name," ",p.age);
        }
    });
}
//#endregion

//#region 8
interface PrintPersoon {
    (persoon:person):void
}
let printNaamDanPersoon:PrintPersoon=(persoon)=>{
        console.log(persoon.name," ",persoon.age);
}

let printLeeftijdDanNaam:PrintPersoon=(persoon)=>{
    console.log(persoon.age," ",persoon.name);
}

let printpersoonmetkleur:PrintPersoon=(persoon)=>{
    if(persoon.age < 70){
        console.log(persoon.name," ",persoon.age)
    }else {
    return
    }
}
let printp:PrintPersoon = (persoon)=>{
    console.log(persoon.name," ",persoon.age);
}

let PrintAllePersonen:IPrintAllePersonen = ()=>{
    for (let i = 0; i < personen.length; i++) {
        printp(personen[i])
        
    }
}
PrintAllePersonen(personen,printp);


function printPersoon (A:person[]):void{
A.forEach(P => {
    console.log(P);
});
}
printPersoon(personen)


interface ISortPersonen   {
    (personen:person[]):person[]
}

let SortPersonen:ISortPersonen = ()=>{
let P:person[] =personen.sort((a,b)=>{
if(a.age < b.age)return -1;
if(a.age > b.age)return 1;
return 0;
});
return P;
}

console.log(SortPersonen(personen));
