function censor(string, censoredWord) {
    return string.replaceAll(censoredWord, "*");
}

console.log(censor("Ala ma kota i psa", "kot"))
