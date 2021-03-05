

let test:string="hello";
function ReverseString(str:string){
    return str.split("").reverse().join("");
}
console.log(ReverseString(test));