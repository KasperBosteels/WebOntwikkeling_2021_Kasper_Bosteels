

interface Calculation {
    (a:number,b:number):number
}
const printCalculationResult = (a : number,b:number,functie:Calculation):void => console.log(functie(a,b));

const mult:Calculation = (a,b)=> a*b;
const add:Calculation = (a,b)=> a+b;

printCalculationResult(2,4,add);
printCalculationResult(2,4,mult);