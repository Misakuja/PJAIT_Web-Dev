function compareByRemainder(a, b) {
    return (a % 3) - (b % 3)
}

let array = [10, 11, 13, 12, 14, 15];

console.log(array.sort(compareByRemainder))