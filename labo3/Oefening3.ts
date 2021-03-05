
function MultiplyText(amount:number,text:string = "default",appendix?:string){
let InternalString:string = text;
for (let o = 1; o < amount; o++) {
    InternalString += ` ${text}`;
}
if(appendix){

    return InternalString + ` ${appendix}`;
}else {
    return InternalString;
}
}
console.log(MultiplyText(3,"Kasper"));
console.log(MultiplyText(3,undefined,"?"));