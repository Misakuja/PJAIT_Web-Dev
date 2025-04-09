function censor(array, censoredWord) {
    return array.map(
        function(arrElement) { return arrElement.replaceAll(censoredWord, "*"); }
    ).join(" ");
}

let array = ['kotlet', 'kotka', 'koty', 'pies'];

console.log(censor(array, "kot"))

