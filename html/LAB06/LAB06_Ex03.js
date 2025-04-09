function censor(element) {
    return element.replaceAll(this.word, "*");
}

let array = ['kotlet', 'kotka', 'koty', 'pies'];

console.log(array.map(censor, { word: "kot" }))

