const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

const slowdiv = (a:number, b:number)=>{
    return new Promise<number>((resolve,reject)=>{
    setTimeout(()=>{
        if(a == 0 || b == 0)reject("cannot divide or divide by 0");
        resolve(a/b);
    },2000)
    });
}
slowSum(1,5)
.then(uitkomst =>{
    console.log(`1 + 5 = ${uitkomst}`)
});

slowSum(1,5)
.then(uitkoms=>{
    slowMult(uitkoms,2)
    .then(multiUitkomst=>{
        console.log(`(1 + 5) * 2 = ${multiUitkomst}`)
    });
});

slowdiv(6,0)
.then(uitkomst =>{
    console.log(`0 / 1 = ${uitkomst}`)
}).catch(fout =>{
    console.log(fout);
});

slowdiv(10,2)
.then(uitkomst =>{
    console.log(`10 / 2 = ${uitkomst}`)
}).catch(fout =>{
    console.log(fout);
});