let factorial = 1;
function factorialNumber(value){
    for (let i = 1; i <= value; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var result = factorialNumber(5);
console.log(result);


