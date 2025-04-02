function areaRectangle(width, height) {
    return width * height;
}

function areaTrapezoid(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}

function areaParallelogram(base, height) {
    return base * height;
}

function areaTriangle(base, height) {
    return (base * height) / 2;
}

function areaSquare(base) {
    return (base * base)
}

function calculateArea(shape, ...args) {
    switch (shape) {
        case 'rectangle':
            return areaRectangle(...args);
        case 'trapezoid':
            return areaTrapezoid(...args);
        case 'parallelogram':
            return areaParallelogram(...args);
        case 'triangle':
            return areaTriangle(...args);
        case 'square':
            return areaSquare(...args)
        default:
            return 'Unknown shape';
    }
}

console.log(calculateArea('triangle', 2, 3));
console.log(calculateArea('parallelogram', 2, 3));
console.log(calculateArea('trapezoid', 2, 3, 3));
console.log(calculateArea('rectangle', 2, 3));
console.log(calculateArea('square', 2));