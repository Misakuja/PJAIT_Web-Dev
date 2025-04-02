function fibonacciSequence(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}

let n = 10;

for (let i = 1; i <= n; i++) {
    console.log(fibonacciSequence(i))
}
