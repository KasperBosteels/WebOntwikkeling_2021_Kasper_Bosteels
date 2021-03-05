import * as chalk from "chalk";
enum Color {red ="red",green="green",blue="blue"};
function MultiplyTextColor(amount:number,text:string = "default",appendix?:string,color?:Color){
let InternalString:string = text;
for (let o = 1; o < amount; o++) {
        InternalString += ` ${text}`;
}
if(appendix)InternalString += ` ${appendix}`;
if(color == "red")return console.log(chalk.red(InternalString));
if(color == "green")return console.log(chalk.green(InternalString));
if(color == "blue"){return console.log(chalk.blue(InternalString));
}else{
    return console.log(InternalString)
}
}
MultiplyTextColor(2,"Kasper","?",Color.red);
MultiplyTextColor(2,"Kasper","?",Color.green);
MultiplyTextColor(2,"Kasper","?",Color.blue);
MultiplyTextColor(2,"Kasper","?");