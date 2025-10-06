// let pr = prompt("Kaha tak add karwaaoge ?");

// if(pr === null){
//     console.log("cancelled");
// }
// else{
//     let n = Number(pr);
//     if(isNaN(n)){
//         console.log("Invalid input");
//     }else{
//         console.log(isPrime(n));
//     }
// }

// function isPrime(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
//         if(n%i==0) return false;
//     }
//     return true;
// }


// let n =Number(prompt("Kaha tak add karwaaoge ?"));
// let sum = 0;
// while(n > 0){
//     sum += n%10;
//     n = Math.floor(n/10);
// }
// console.log(sum);


// do while
// let pr;
// do {
//     pr = prompt("0 or anything");
//     console.log("You entered:",pr);
//     console.log(typeof(pr));
//     pr = Number(pr);
//     console.log(pr);
//     console.log(typeof(pr));
//     console.log("hello");   
// } while (pr !== 0);


// guess the number game
// let randomNumber = Math.floor((Math.random()*100)+1)
// let guessedNumber = -1;
// while (guessedNumber !== randomNumber) {
//     guessedNumber = Number(prompt("Guess a number between 1 to 100"));
//     if(isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100){
//         console.log('Try again between 1 - 100');
//         continue;
//     }
//     if(guessedNumber > randomNumber){
//         console.log("too high, try again");
//     }else if(guessedNumber < randomNumber){
//         console.log("too low, try again");
//     }else{
//         console.log("congrats 🎉🎉 and the number was: ", randomNumber);
//     }
// }


process.stdout.write("Hello ")
process.stdout.write("World")