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

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// number in right angle triangle

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }



// Inverted right angle triangle
// for(let i=1; i<=n; i++){
//     for(let j=n-i+1; j>0; j--){
//         process.stdout.write("* ");
//     }
//     console.log();
// }


// Mirror right angle triangle

for(let i=1; i<=n; i++){
    let nss = n-i;
    let nos = i;
    for(let j=nss; j>0; j--){
        process.stdout.write(" ");
    }
    for(let k=nos; k>0; k--){
        process.stdout.write("*");
    }
    console.log();
}