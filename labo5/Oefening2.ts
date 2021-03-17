interface print{
    (nummer:number):void
}
 /*
const printToConsole:print = (number:number):void => console.log(`the result is ${number}`);
const sum = (array:number[],printToConsole:print):void =>{
    let total:number =0;
    array.forEach(num => {
    total += num
    });

    printToConsole(total);
}
*/
const printToConsole:print = (number:number):void => console.log(`the result is ${number}`);
const sum = (array:number[],printToConsole:print,otherfunction:print):void =>{
    let total:number =0;
    array.forEach(num => {
    total += num
    });

    if(total>10){printToConsole(total);
    }else{
        otherfunction(total);
    }

}
sum([1,1,3],printToConsole,otherfunction=>console.log(`the result ${otherfunction} is a very small number`));