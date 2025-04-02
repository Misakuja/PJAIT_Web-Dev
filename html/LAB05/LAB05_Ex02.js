function loop(a, b, c) {
    let numbers = [a, b].sort((a, b) => a - b)

    for (let i = numbers[0]; i < numbers[1]; i++) {
        if (i % c === 0) console.log(i);
    }
}
loop(3, 10, 5);
console.log("")

loop(5, 12, 2);
console.log("")

loop(8, 15, 3);
console.log("")

loop(7, 100, 25);
console.log("")
