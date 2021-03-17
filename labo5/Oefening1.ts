//const printStuff =(amount:number,text:string):void => console.log(`Hello ${text}, you are number ${amount}`);
interface IPrinstStuff {
    (amount:number,text:string):void
}
const printstuff:IPrinstStuff = (amount,text)=>console.log(`Hello ${text}, you are number ${amount}`);

interface ItwoArray{
    (element1:string,element2:string):string []
}
const twoArray:ItwoArray = (elemtn1,element2) => [elemtn1,element2];

interface InumberToString {
    (number:number):string
}
const numberToString:InumberToString = (number) => `${number}`;

printstuff(12,"Kasper");
console.log(twoArray("hello","sayonara"));
console.log(numberToString(500));