

var getallen = [];
for (let i = 100; i <= 200; i++) {
    getallen[i-100] = i;
}
let index:number = 0;
while (index <= 100) {
    console.log(getallen[index]);
    index++;
}
console.log("\neinde while loop\n")
for (let j = 0; j < getallen.length; j++) {
    if(getallen[j] % 3 == 0){
        console.log(getallen[j]);
    }   
}
