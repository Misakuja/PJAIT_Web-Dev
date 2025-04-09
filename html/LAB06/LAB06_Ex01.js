const rectangle = (width, height) => width * height;
const trapezoid = (base1, base2, height) => ((base1 + base2) * height) / 2;
const parallelogram = (base, height) => base * height;
const triangle = (base, height) => (base * height) / 2;
const square = (base) => base * base;

const area = (callback, ...args) => callback(...args);

console.log(area(triangle, 2, 3));
console.log(area(parallelogram, 2, 3));
console.log(area(trapezoid, 2, 3, 3));
console.log(area(rectangle, 2, 3));
console.log(area(square, 2));