


const CalculateAnimalAge=(age:number,verhouding:number):number => age*verhouding;

const CalculateDogAge:CalculateSpecificAnimalAge = age => CalculateAnimalAge(age,7);
console.log(CalculateDogAge(3)); // 21


const CalculateAnimalAgeFunctional=(omzetting:number):CalculateSpecificAnimalAge => {
    return age => CalculateAnimalAge(age,omzetting)
}
const CalculateHamsterAge=(CalculateAnimalAgeFunctional(26));
console.log(CalculateHamsterAge(.5));


interface CalculateSpecificAnimalAge {
    (age:number):number
}