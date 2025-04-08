function pascals(n) {
    if (n === 0) return [];
    if (n === 1) return [[1]];
    let result = [];

    for (let row = 1; row <= n; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1); //first or last element
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        console.log(arr)
        result.push(arr);
    }
    return result;
}

pascals(7)