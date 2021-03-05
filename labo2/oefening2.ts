enum regenboog {"rood","oranje","geel","groen","lichtblauw","donkerblauw"};
let aray: string[] = [];
for (let i = 0; i < 6; i++) {
    aray[i] = regenboog[i];
    console.log(aray[i]);
}
while (aray.length >= 1){
  console.log(aray.pop())  
}
