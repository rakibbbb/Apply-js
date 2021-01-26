function factorialNumber(value){
    let factorial = 1;
    let i = 1;  
    while(i <= value){
        factorial = factorial * i;
        i++;
    }   
    return factorial;
}

let result = factorialNumber(6);
console.log(result);
