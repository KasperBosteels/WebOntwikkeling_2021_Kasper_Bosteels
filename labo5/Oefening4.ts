


const CalculateAnimalAge=(age:number,verhouding:number):number => age*verhouding;

const CalculateDogAge = (age:number)=> CalculateAnimalAge(age,7);
console.log(CalculateDogAge(3)); // 21


const CalculateAnimalAgeFunctional=(omzetting:number)=> {return (age:number) => {return CalculateAnimalAge(age,omzetting)}}

const CalculateHamsterAge=(CalculateAnimalAgeFunctional(26));
console.log(CalculateHamsterAge(.5));
