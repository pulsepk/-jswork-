//4th Feb 2023
/* const flight = 'LH12'
const hassan = {
    name: 'Hassan Nazar',
    passport: 12311
}

const checkin = function(flightNum, passenger){
    flightNum = 'LH573';
    passenger.name = 'Mr' + passenger.name;
    if(passenger.passport==12311){
    alert('Checked In');
    }
    else{
        alert('Wrong passport');
    }
};

checkin(flight, hassan);
console.log(flight);
console.log(hassan); */

//Assignment 1
/* const country = 'Pakistan'
const continent = 'Asia'
const population = '220Million'

console.log(country)
console.log(continent)
console.log(population) */

//Assignment 2
/* let pakistan = true
let isIsland = pakistan
let language;
console.log(isIsland)
console.log(language)
console.log(pakistan)
console.log(typeof population) */

/* function fruits(apple, banana){
    console.log(apple, banana);
    const fav = `I have ${apple} apple and ${banana} banana`;
    return fav;
}
const favs = fruits(1,2);
console.log(favs); */

//Function Declaration
/* const ans = calcage(2001);
function calcage(birthyear){
    return 2023 - birthyear;
}

//Fucntion Expression
console.log(ans);

const agecal = function (birthyear){
    return 2023 - birthyear;
}
const ans1 = agecal(2001);
console.log(ans1); */

//Arrow Function
/* const calcage =birthyear => 2023-birthyear;
const age = calcage(2001);
console.log(age);

const yearsuntilretirement =  (firstname,year) =>{
    const age=50-year;
    const a = `${firstname} has ${age} years until retirement`;
    return a;
}
console.log(yearsuntilretirement('Hassan', 21));
console.log(yearsuntilretirement('Ali', 49)); */

//Function Calling another Function
/* function fruitcut(fruit){
    return fruit*4;
}
function fruits(apple, banana){
    const a = fruitcut(apple);
    const b = fruitcut(banana);
    const fav = `I have ${a} apple and ${b} banana`;
    return fav;
}

console.log(fruits(2,4));
*/

//7th Feb
//Function Chanllenges
//Q1
/* const calcAverage = (team,score1,score2,score3) =>{
    const average = (score1+score2+score3)/3;
    const a = `Team ${team} has average score of ${average}`;
    return a;
}
console.log(calcAverage('Dolphins',44,23,71));
console.log(calcAverage('Koalas',65,54,49)); */



//Q3
/* function checkWinner(avgdolphins, avgkoalas){
    if (avgdolphins>= avgkoalas*2)
    console.log(`Team Dolphins wins with average (${avgdolphins} vs ${avgkoalas})`);
    else if (avgdolphins*2<= avgkoalas)
    console.log(`Team Koalas wins with average (${avgkoalas}} vs ${avgdolphins})`);
    else
    console.log("No team wins");
}

function dolphins(score1,score2,score3){
    const avgdolphins = (score1+score2+score3)/3;
    return avgdolphins;
}
console.log(dolphins(44,23,71));

function koalas(score1,score2,score3){
    const avgkoalas = (score1+score2+score3)/3;
    return avgkoalas;
}
console.log(koalas(65,54,49));

checkWinner(dolphins, koalas); */

//Arrays

/* function calcTip(bill){
    if (bill >=50 && bill <= 300){
        
        const percentage = (bill/100)*15;
        console.log(`Tip is 15% so Tip Amount is ${percentage}`);
        tips(`${percentage}`);
    }
    else{
        const percentage = (bill/100)*20;
        console.log(`Tip is 15% so Tip Amount is ${percentage}`);
        tips(`${percentage}`);
    }
    
}
function tips(tips){
    //console.log(`${tips}`);
    let Tips = [];
    let b = Tips.push(`${tips}`);
    console.log(Tips);

}
//calcTip(bills);
const bills= [125, 55,44];
/* const a = bills.pop();
console.log(a); */

/* for(let i=0;i< 3;i++){
    const a = bills.pop();
    calcTip(a);
} */

//Arrays

/* const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills ,tips, totals); */


/* const hassan = {
    first: 'Hassan',
    last: 'Nazar',
    age: 21,
}
console.log(hassan);
console.log(hassan.first);
const a = hassan.last;
console.log(hassan['first'] + a);


const jonas = {
    name: 'Jonas',
    bestfriend: 'Ali',
    friends : ['Ali', 'Ahmed', 'Hassan'],
}

console.log(`${jonas.name} has ${jonas.friends.length} friends and his best friend is ${jonas.bestfriend}`); */


//15th Feb

const hassan = {
    first_name: `Hassan`,
    last_name: `Nazar`,
    age: 21,
    birthyear: 2001,
    haslicense : true,
    calcage : function(birthyear){
        return 2023-this.birthyear;
    }
}


console.log(hassan.calcage());





 

