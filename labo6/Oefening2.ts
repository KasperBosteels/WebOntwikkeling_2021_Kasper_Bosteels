let names: string[] = ['joske','franske','donald','achmed'];
let capitalNames1:string[] = [];
let capitalNames2:string[] = [];

names.forEach(name => capitalNames1.push(name.toUpperCase()));
console.log(capitalNames1);


capitalNames2 = names.map(name=>name.toUpperCase());
console.log(capitalNames2);