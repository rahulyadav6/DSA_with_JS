let pr = prompt("Kaha tak add karwaaoge ?");

if(pr === null){
    console.log("cancelled");
}
else{
    let n = Number(pr);
    if(isNaN(n)){
        console.log("Invalid input");
    }else{
        console.log(isPrime(n));
    }
}

function isPrime(n){
    if(n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
        if(n%i==0) return false;
    }
    return true;
}