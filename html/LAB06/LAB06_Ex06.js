function filterByAge(element) {
    return element[2] > 20;
}
function mapResult(arr) {
    return arr.map(person => `${person[0]} | ${person[1]} | ${person[2]}`);
}

let array = [
    ['Jan', 'Kowalski', 21],
    ['Anna', 'Nowak', 19],
    ['Jan', 'Trzeci', 27] ];

console.log(mapResult(array.filter(filterByAge)));