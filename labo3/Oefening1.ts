let items:number[] = [2,5,3,7,8,10,15,18,24,111,12,19,87];

function SearchIndex (arr:number[],nummer:number){
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==nummer)return i;    
}
}
console.log(SearchIndex(items,5));
console.log(SearchIndex(items,15));