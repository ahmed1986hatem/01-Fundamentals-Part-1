let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight**2);

let johnBmi = johnMass / (johnHeight**2);


console.log(markBmi, johnBmi, markBmi > johnBmi);

if (markBmi > johnBmi){
console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
}
else{
console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
}



// markMass   = 95 ;
// markHeight = 1.88;
// johnMass   = 85;
// johnHeight = 1.76;

// markBmi= markMass / (markHeight**2);
// johnBmi= johnMass / (johnHeight**2);

// console.log (markBmi, johnBmi, markBmi> johnBmi);




