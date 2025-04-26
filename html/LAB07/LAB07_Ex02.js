class Grade {
    #subject;
    #value;

    constructor(subject, value) {
        this.#subject = subject;
        this.#value = value;
    }

    get subject() {
        return this.#subject;
    }

    set subject(value) {
        this.#subject = value;
    }

    get value() {
        return this.#value;
    }

    set value(input) {
        this.#value = input;
    }
}
class Student {
    #name;
    #surname;
    #grades = [];

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get gradesAverage() {
        if (this.#grades.length === 0) return 0;
        let sum = 0;
        this.#grades.forEach(grade => sum += grade.value);
        return (sum / this.#grades.length).toFixed(2);
    }

    get grades() {
        let result = "";
        this.#grades.forEach(grade => {
            result += "Subject: " + grade.subject + " - grade: " + grade.value + ". ";
        });
        return result;
    }

    get gradesArray() {
        return this.#grades;
    }

    set grades(newGrade) {
        if (newGrade instanceof Grade) {
            this.#grades.push(newGrade);
        }
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }

    hello() {
        return `Hello ${this.name} ${this.surname}, your grade average is: ${this.gradesAverage}`;
    }
}
let student = new Student("Jan", "Kowalski");

console.log(student.hello());
student.grades = new Grade("PRI", 3);
student.grades = new Grade("TIN", 5);
student.grades = new Grade("POJ", 2);

console.log(student.hello());
console.log(student.grades);
