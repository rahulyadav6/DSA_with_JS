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