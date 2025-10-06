let prompt1 = require('prompt-sync')();

let n = Number(prompt1("Enter a number: "));

// square printing
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// right angle triangle print

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}