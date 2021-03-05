let arr:number = [];
for (let i = 0; i <= 10; i++) {
    arr[i] = 7*i;
    if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
    }else{
        if(arr[i] % 3 == 0 || arr[i] % 5 == 0){console.log(arr[i]);
    }
    }
}
