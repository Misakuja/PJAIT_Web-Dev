function filterByAge(element) {
    return element[2] > 20;
}

let array = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27] ];

console.log(array.filter(filterByAge))