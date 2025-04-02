function isPythagoreanTriangle(a, b, c) {
    let sides = [a, b, c].sort((a, b) => a - b)

    return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2);
}
console.log(isPythagoreanTriangle(3, 4, 5));
console.log(isPythagoreanTriangle(5, 12, 13));
console.log(isPythagoreanTriangle(8, 15, 17));
console.log(isPythagoreanTriangle(7, 24, 25));
console.log(isPythagoreanTriangle(1, 2, 3));