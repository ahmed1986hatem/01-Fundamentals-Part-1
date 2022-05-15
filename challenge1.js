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



// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



const averageDolphin = (97+ 112+ 101)/3;
const averageKoala   = (109+ 95+ 106)/3;
console.log(averageDolphin,averageKoala);

if (averageDolphin >averageKoala || averageDolphin ===100 ){
    console.log("Dolphins are wins 🏆");
}
else if (averageDolphin < averageKoala || averageDolphin ===100){
    console.log("Koalas are wins 🏆");
}



else{
    console.log("Both are Equals 🤝");
}

let tip;
let bill=275;

bill >=50 && bill<= 300? tip = bill * 0.15: tip = bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${tip+bill}`)













