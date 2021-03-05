let ar:any[] = [];
for (let i = 0; i <= 100; i++) {
ar[i] = i;
if(ar[i] % 3 == 0){
    ar[i] = "fizz";
}else if (ar[i] % 5 == 0){
    ar[i] = "buzz"
}
}
for (let y = 0; y < ar.length; y++) {
console.log(ar[y]);
}